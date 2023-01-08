import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function CBCC() {
  const [amount, setAmount] = React.useState(1111)
  const handleChange = (value) => setAmount(value)
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //CIR Price : TODO fetch price from Contract for automatic update
//   const price = Web3.utils.toWei("0.0005", "ether")

  // Initialze claimBCC Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0xFA3E410De5B46D65977F9188C1c55307166c4a62',
    abi: [
      {
        name: 'stakeRewards',
        type: 'function',
        stateMutability: 'nonpayable',
        // inputs:
        //   [
        //     //Contract Params
        //     { internalType: 'uint256', name: '_amount', type: 'uint256' },
        //   ],
        outputs: [],
      },
    ],
    functionName: 'stakeRewards',
    // overrides: {
    //   // Override Price 
    //   value: String(amount),
    // },
    // Amount to minta
    // args: [amount],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Compound Successful',
        description: "Staked CIR Compunded by ...% :)",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Compoundl successful");
    },
    onError(error) {
      toast({
        title: 'Compoundl Failed.. User rejected the transaction or not enough Gas To Stake CIR',
        description: console.log(error),
        status: "error",
        duration: '9000',
        isClosable: true
      })
      console.log(error);
    },
    onMutate({ args }) {
      console.log('Mutate', { args })
    },
  })
  console.log(data)
  console.log(write)
//   console.log(amount)


  return (
    <>
      <Box fontSize="xl" fontWeight="bold" align="right">

        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
            <FormLabel htmlFor="amount" textAlign="right">
              Compound Rewards
            </FormLabel>
          <Button disabled={!write} onClick={() => write?.()}>
            Compound CIR
          </Button>
          {/* <Box>{error && (
            <div>{error.message}</div>
          )}</Box> */}
        </form>
      </Box>
    </>
  )
}


