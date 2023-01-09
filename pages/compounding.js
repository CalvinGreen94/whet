import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
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
                    Bored Circles | Compound CIR
                </title>
                {/* <meta name="description" content="TaurosDAO, Merca City, and Labyrinthine Unreal are all seamlessly part of an ecosystem known as The Ontological Game, which is the umbrella game that comprises them all, but with enough room for expansion as well as additional games, enterprises, and diversions." keywords="NFT, nftart, digitalart, digitalartist, mint, taurosdao, labyrinthine, game, cryptocurrency, crypto, ethereum, membership, art, metaverse, MMORTS, exploration, token, coin, altcoin, dao, multiplayer, simulation, sim, ecosystem" /> */}
            </Head>

            {/* <Heading textStyle="title" fontSize="3xl"><About /></Heading> */}


            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}>Compounding: </span>
                <Center>“Compound interest is the eighth wonder of the world. He who understands it, earns it … he who doesn’t … pays it.”-Albert Einstein </Center>

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