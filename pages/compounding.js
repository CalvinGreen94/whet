import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'
import CBCC from '@components/mint/CompoundBCC'
import UI from '@components/mint/userInfo'
import CR from '@components/mint/claimRewards'
import Rewards from '@components/mint/rewards'
export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    Bored Circles | Compound $CIR
                </title>

            </Head>

            {/* <Heading textStyle="title" fontSize="3xl"><About /></Heading> */}


            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}>Compounding: </span>
                <Center>$CIR Compounding is a secure, automated compounding platform designed to help users maximize their Bored Circles Club holding. The BCC platform provides users with a simple and easy to use interface, enabling them to quickly and securely compound their $CIR without needing to manually buy and sell them. With $CIR Compounding, users can easily monitor their holdings and will soon be able to choose from a wide range of compounding options to ensure their $CIR are always growing. With $CIR Compounding, users can easily optimize their holdings and take their NFT experience to the next level. </Center>

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
                Compound  $CIR
                Compound Frequency: 8600 Seconds
                <Center pb={10}>
                    <CBCC />
                </Center>  
                {/* <UI />    */}
                <Rewards />
                <CR />
                </Text>

        </Box>
    )
}