import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'
import SBB from '@components/mint/StakeButtonBounce'
import WTH from '@components/mint/WithdrawBCC'
import Rewards from '@components/mint/rewards'
import CR from '@components/mint/claimRewards'
export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    Bored Circle Club | DeFi
                </title>
            </Head>

            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}>Stake</span>

                <Center pb={10}>
                    <SBB />
                </Center>
            </Text>
            <Center pt={10}>

            </Center>



            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}> WithDraw Stake/Rewards: </span>              <Center pb={10}>
                    <WTH />
                </Center>  <Rewards /> <CR /></Text>


        </Box>
    )
}