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
                    Bored Circles | About $Cir
                </title>
                {/* <meta name="description" content="TaurosDAO, Merca City, and Labyrinthine Unreal are all seamlessly part of an ecosystem known as The Ontological Game, which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions." keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, metaverse, MMORTS, exploration, token, coin, altcoin, dao, multiplayer, simulation, sim, ecosystem" /> */}
            </Head>

            <Center><Heading>About $CIR</Heading></Center>


            <Center pt={10}>

                <Text textStyle="content">
                    <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}>Staking:</span><br /><br /></Center>
                    <Center>
                    Welcome to Bored Circles Club $CIR Token Staking! The staking platform securely and conveniently handles staking of $CIR. The Bounce platform provides an intuitive interface for users to easily and securely stake their tokens and increase their stake rewards.At Bored Circles Club, Bored Circles Club believe that anyone should be able to stake their tokens and secure the rewards. Bored Circles Club have designed our platform to ensure that token holders get the most out of the Bored Circles NFT. The platform is designed to be simple and user-friendly, so that even those new to staking can easily get started. Bored Circles Club is committed to providing our users with the best possible experience, and Bored Circles Club is constantly working to improve the platform. Bored Circles Club is constantly innovating to ensure that each user get the best rewards and the highest security. Thank you for visiting. Start staking your tokens now and secure the rewards!
                    </Center>
                    <Center pb={10}>
                    <SBB />
                </Center>
                </Text>



            </Center>

            <Text textStyle="content">
                {/* <span style={{ color: "black", fontWeight: "500" }}>About $CIR </span>, <span style={{ color: "black", fontWeight: "500" }}></span> */}
                <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}><Link href="https://eips.ethereum.org/EIPS/eip-918">Mineable</Link>:</span><br /><br /></Center>
                <Center> Coins are created through the process called mining and all transactions are verified by the miners across the world.
                    $CIR can be created and minted based on $CIR activity. $CIR as a miners reward is utilized via "Merged Mining (Melt Extraction)" to tie $CIR supply with ether.
                    $CIR coins are created and are rewarded (block reward) to the miner for successfully verifying transactions on the network and adding it to the newly created block on the blockchain. <Spacer /></Center>
                <br /><br />
                <span style={{ color: "black", fontWeight: "500" }}>The miner as well as $CIR holder</span> will start receiving a newly minted reward of $CIR for every <span style={{ color: "black", fontWeight: "500" }}>Stake, Withdrawl, Rewards Claim, and Token Compound whenever there is a block mined with these contract interactions</span>.
                This reward value will increase or decrease based on market volatility.

            </Text>

            <Spacer /><br /><br />
            <Text textStyle="content">
                <Spacer /> <Center><span style={{ color: "black", fontWeight: "500" }}>Compound $CIR:</span><br /><br /></Center>
                <Center>
                $CIR Compounding is a process of automated reinvestment of $CIR tokens into a liquidity pool in order to earn rewards. By automatically reinvesting $CIR, holders can earn rewards over time. The process is often referred to as a "compounding" effect, as it allows users to increase their holdings of a given token over time. Compounding is one way to increase $CIR holdings without having to actively trade tokens on an exchange.
                </Center>
            </Text>

            <Text textStyle="content">
                Compound Frequency: 8600 Seconds
                <Center pb={10}>
                    <CBCC />
                </Center>
                <Rewards />
                <CR />
            </Text>

        </Box>
    )
}