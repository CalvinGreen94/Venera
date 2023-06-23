import { useState } from 'react'
// import { Textarea } from '@nextui-org/react';
import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useContractRead, useAccount } from 'wagmi'
import { useEnsAvatar, useDisconnect, useConnect } from 'wagmi'

import { ethers } from "ethers";
import { useToast, Heading, Center, Input, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import {
    Badge,
    Link,
    useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import UI from '@components/mint/erc20balance';
// import CVen from "./CompoundVen";
// <CVen />
// import Rewards from "./rewards";

export default function GPT() {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("");
    const { address, isConnected } = useAccount()

    // const client = new faunadb.Client({ domain:"db.us.fauna.com", secret: process.env.NEXT_PUBLIC_FAUNA_SECRET_KEY, keepAlive: true });
    const { data, isError, isSuccess } = useContractRead({
        address: '0x209999D71C5D422dB0d1ce92860d75475608fFad',
        abi: [
            {
                name: 'balanceOf',
                type: 'function',
                stateMutability: 'view',
                inputs:
                    [
                        {
                            internalType: "address",
                            name: "owner",
                            type: "address"
                        }
                    ],
                outputs: [
                    {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }
                ],
            },
        ],
        functionName: "balanceOf",
        args: [address]
    })
    console.log(isError)
    console.log(isSuccess)
    console.log(data)

    const getResponseFromOpenAI = async () => {
        setResponse("");
        console.log("Getting response from OpenAI...");
        setIsLoading(true);
        const response = await fetch("/api/openai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: prompt }),

        });

        const data = await response.json();
        setIsLoading(false);
        console.log(data.text);
        setResponse(data.text);
        // var createP = client.query(
        //     q.Create(
        //       q.Collection('Prompts'),
        //       { data: { user: user.username, prompt:prompt, GPTresponse:data.text,date: new Date().toString() } }
        //     ))
        //   createP.then(function(response) {
        //     console.log(response.ref); // Logs the ref to the console.
        //     // onPostCreated(response.data); // Call the callback with the new post data
        //     // router.push(`/topics/${response.data.slug}`); // Redirect the user to the new topic's page
        //   })
    };
    if (!isConnected)
        return (
            <>
                {/* <Header /> */}
                <Center>
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '500px' }}
                    height={{ sm: '476px', md: '550px' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('black', 'gray.900')}
                    boxShadow={'2xl'}
                    padding={4}>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                        pt={2}>
                    
                    <Heading><Text fontWeight={600} color={'white'} size="sm" mb={4}>
                    Please connect wallet to Access </Text></Heading>
                    </Stack></Stack>
                </Center>
            </>
        );

    if (isConnected && data < 1)
        return (
            <>
                {/* <Header /> */}
                <Center>
                    
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '500px' }}
                    height={{ sm: '476px', md: '550px' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('black', 'gray.900')}
                    boxShadow={'2xl'}
                    padding={4}>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                        pt={2}>
                    
                    <Heading><Text fontWeight={600} color={'white'} size="sm" mb={4}>Must own One Venera Club NFT to Utilize Venera GPT</Text></Heading>
                    </Stack>
                    </Stack>
                </Center>
            </>
        );

    if (isConnected && data >= 1)
        return (
            <Center>
                {/* <Text>After Reading Whitepaper feel free to ask ChatGPT any questions about blockchain operations.</Text> */}
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '500px' }}
                    height={{ sm: '476px', md: '550px' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('black', 'gray.900')}
                    boxShadow={'2xl'}
                    padding={4}>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                        pt={2}>
                        <Heading><Text fontWeight={600} color={'white'} size="sm" mb={4}>
                            Venera-GPT
                        </Text></Heading>

                        {/* <div className={styles.center}> */}
                        <FormControl my="4" maxW="210" minW="210">
                            {/* textAlign="right" */}
                            <FormLabel htmlFor="amount">
                                <Text fontWeight={300} color={'white'} size="sm" mb={4}> Enter Your Question </Text>
                            </FormLabel>
                            <Input status="secondary"
                                placeholder="Enter a prompt"
                                onChange={(e) => setPrompt(e.target.value)}
                                row="5"
                                cols="50"
                                color={"white"}

                            />
                        </FormControl>
                        <Stack
                            flex={1}
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            p={1}
                            pt={2}>
                            <Button onClick={getResponseFromOpenAI}>
                                Get Response
                            </Button>
                        </Stack>

                        <div>
                            {isLoading ? (
                                <div>Waiting...</div>
                            ) : (
                                <Text color={"white"}>{response}</Text>
                            )}
                        </div>
                    </Stack>
                    {/* </div> */}
                </Stack>
            </Center>
        )
}