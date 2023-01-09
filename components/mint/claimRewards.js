import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function CR() {
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
        address: '0x192E2E9BC64494facfF9C843591AacAc62cDd2d2',
        abi: [
            {
                name: 'claimRewards',
                type: 'function',
                stateMutability: 'nonpayable',
                inputs:
                    [
                        
                    ]
                ,
                outputs: [],
            },
        ],
        functionName: 'claimRewards',
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
        onSuccess(data) {
            toast({
                title: 'Claim Successful',
                description: "claimed CIR Compunded by ...% :)",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            console.log("Claim successful");
        },
        onError(error) {
            toast({
                title: 'Claim Failed.. User rejected the transaction or not enough Gas To Stake CIR',
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
                        Claim Rewards
                        <Button disabled={!write} onClick={() => write?.()}>
                        Claim CIR
                    </Button>
                    </FormLabel>

                    {/* <Box>{error && (
            <div>{error.message}</div>
          )}</Box> */}
                </form>
            </Box>
        </>
    )
}


