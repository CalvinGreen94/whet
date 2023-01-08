import Head from 'next/head'
import { Box, Text, Heading, Spacer,Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'
import CBCC from '@components/mint/CompoundBCC'
import UI from '@components/mint/userInfo'
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
                 CIR can be created or minted based on CIR activity. CIR as a miners reward is utilized via "Merged Mining (Melt Extraction)" to tie CIR supply with ether.
                 CIR coins are created and are rewarded (block reward) to the miner for successfully verifying transactions on the network and adding it to the newly created block on the blockchain. <Spacer /></Center>
                 <br /><br />
                    <span style={{ color: "black", fontWeight: "500" }}>The miner as well as CIR holder</span> will start receiving a newly minted reward of CIR for every <span style={{ color: "black", fontWeight: "500" }}>Stake, Withdrawl, Rewards Claim, and Token Compound whenever there is a block mined with these contract interactions</span>.
                    This reward value will increase or decrease based on market volatility.
                 
            </Text>
            
            <Center pt={10}>
                {/* <video 
                    className={styles.aboutTrailer}
                    src="videos/demo.gif" 
                    alt="generations"
                    controls
                    objectfit="cover"
                    layout="fill"
                /> */}

            </Center>

            <Text textStyle="content">
                Compound  CIR
                Compound Frequency: 1200 Seconds
                <Center pb={10}>
                    <CBCC />
                </Center>  
                <UI />   
                <CR />
                </Text>

        </Box>
    )
}