import Head from 'next/head'
import { Box, Text, Heading, Center } from "@chakra-ui/react"
import Link from 'next/link'
import { About } from '@components/animations/AnimatedTitles'
import styles from '@styles/About.module.css'
import SBV from '@components/mint/StakeButtonVenera'
import WTH from '@components/mint/WithdrawVEN'
import Rewards from '@components/mint/rewards'
import CR from '@components/mint/claimRewards'
import UI from '@components/mint/contractInfo'
export default function AboutPage() {
    return (
        <Box>
            <Head>
                <title>
                    Venera Club | DeFi
                </title>
            </Head>

            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}>Stake:</span>
                <UI />

                <Center pb={10}>
                    <SBV />
                </Center>
            </Text>
            <Center pt={10}>

            </Center>



            <Text textStyle="content">
                <span style={{ color: "black", fontWeight: "500" }}> WithDraw Stake/Rewards: </span>
                <Rewards />       
                      <Center pb={10}>

                    <WTH />
                </Center> <CR /></Text>


        </Box>
    )
}