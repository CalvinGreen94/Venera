import React, { useState } from 'react'
import { Flex, IconButton, Divider, Heading, Center } from '@chakra-ui/react'
import { ImMenu, ImEarth, ImHome, ImCalendar, ImUsers, ImBlog } from 'react-icons/im'
import { MdSummarize, MdBallot } from 'react-icons/md'
import NavItem from './NavItem'
import styles from '@styles/Sidebar.module.css'
import { FaFunnelDollar } from 'react-icons/fa';
import { TbBusinessplan } from 'react-icons/tb';
import {IoNewspaper} from 'react-icons/io'
export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small")
    return (
        <Flex
            className={styles.hideScroll}
            display={{ base: "none", md: "block" }}
            top={20}
            pos="fixed"
            left="5"
            h="85vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            overflowY="scroll"
            overflowX="hidden"
        // bgGradient="linear(to-br, #f6ffee,#fef2f2)"
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
                background="#CCABD8"
            >
                <IconButton
                    background="#ffffff"
                    mt={5}
                    _hover={{ background: '#79cee3' }}
                    icon={<ImMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <Flex
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                // mb={4}
                >
                    <Flex align="center">
                        {/* <Avatar size="sm" src="../tauros-avatar-black.png" /> */}
                        <Flex>
                            <NavItem navSize={navSize} href="/" icon={ImHome} title="Dashboard" />
                        </Flex>
                    </Flex>
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                </Flex>
                <NavItem navSize={navSize} href="#" icon={IoNewspaper} title="Venera/$VeN WHITEPAPER" />

                <NavItem navSize={navSize} href="about" icon={MdSummarize} title="About Venera/VeN" />
                <NavItem navSize={navSize} href="locations" icon={ImEarth} title="Gallery Locations" />

                <NavItem navSize={navSize} href="staking" icon={FaFunnelDollar} title="Stake VeN" />
                <NavItem navSize={navSize} href="compounding" icon={TbBusinessplan} title="Compound VeN" />


            </Flex>

        </Flex>
    )
}