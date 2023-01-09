import Head from 'next/head'
import { Box, Text, Heading, Spacer, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'
import CBCC from '@components/mint/CompoundBCC'
import UI from '@components/mint/userInfo'
import SBB from '@components/mint/StakeButtonBounce'
import Rewards from '@components/mint/rewards'
import CR from '@components/mint/claimRewards'
export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    Bored Circles | About Cir
                </title>
                {/* <meta name="description" content="TaurosDAO, Merca City, and Labyrinthine Unreal are all seamlessly part of an ecosystem known as The Ontological Game, which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions." keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, metaverse, MMORTS, exploration, token, coin, altcoin, dao, multiplayer, simulation, sim, ecosystem" /> */}
            </Head>

            <Center><Heading>About CIR</Heading></Center>


            <Text textStyle="content">
                {/* <span style={{ color: "black", fontWeight: "500" }}>About CIR </span>, <span style={{ color: "black", fontWeight: "500" }}></span> */}
                <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}><Link href="https://eips.ethereum.org/EIPS/eip-918">Mineable</Link>:</span><br /><br /></Center>
                <Center> Coins are created through the process called mining and all transactions are verified by the miners across the world.
                    CIR can be created and minted based on CIR activity. CIR as a miners reward is utilized via "Merged Mining (Melt Extraction)" to tie CIR supply with ether.
                    CIR coins are created and are rewarded (block reward) to the miner for successfully verifying transactions on the network and adding it to the newly created block on the blockchain. <Spacer /></Center>
                <br /><br />
                <span style={{ color: "black", fontWeight: "500" }}>The miner as well as CIR holder</span> will start receiving a newly minted reward of CIR for every <span style={{ color: "black", fontWeight: "500" }}>Stake, Withdrawl, Rewards Claim, and Token Compound whenever there is a block mined with these contract interactions</span>.
                This reward value will increase or decrease based on market volatility.

            </Text>

            <Center pt={10}>

                <Text textStyle="content">
                    <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}><Link href="https://www.coinbase.com/learn/crypto-basics/what-is-staking">Staking</Link>:</span><br /><br /></Center>
                    <Center>
                        Staking is the process of locking up crypto holdings in order to obtain rewards or earn interest.
                        Staking is a way to use your crypto holdings or coins to earn additional rewards. It can be helpful to think of it as along the lines of generating interest on cash savings, or earning dividends on stock holdings.
                        Essentially, coin holders allow their crypto to be used as a part of the blockchain validation process, and are rewarded by the network for the use of their assets. For crypto investors, staking can open up another potential avenue to generating returns.
                    </Center>
                    <Center pb={10}>
                    <SBB />
                </Center>
                </Text>



            </Center>
            <Spacer /><br /><br />
            <Text textStyle="content">
                <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}><Link href="https://www.coinbase.com/learn/crypto-basics/what-is-staking">Compounding</Link>:</span><br /><br /></Center>
                <Center>“Compound interest is the eighth wonder of the world. He who understands it, earns it … he who doesn’t … pays it.”-Albert Einstein </Center><Spacer /><br /><br />
                <Center>
                    Compounding is the process in which an asset’s earnings, from either capital gains or interest, are reinvested to generate additional earnings over time. This growth, calculated using exponential functions, occurs because the investment will generate earnings from both its initial principal and the accumulated earnings from preceding periods.
                    Compounding, therefore, differs from linear growth, where only the principal earns interest each period.
                </Center>
            </Text>

            <Text textStyle="content">
                Compound Frequency: 1200 Seconds
                <Center pb={10}>
                    <CBCC />
                </Center>
                <Rewards />
                <CR />
            </Text>

        </Box>
    )
}