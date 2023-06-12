import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite,useContractRead, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    Badge,
    Link,
    useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import Sell from "./sellVen";
export default function Buy() {
  const [amount1, setAmount] = React.useState(0.01)
  const handleChange = (value) => setAmount(value) 
  // const [amount2] = Web3.utils.toBN(amount1) 

  const router = useRouter();
  useEffect(() => {
    if (!amount1) router.replace("/");
  }, [amount1]);
  const amount = Web3.utils.toWei(String(amount1),"ether")


  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()
  //$VeN Price : TODO fetch price from Contract for automatic update
//   const price = Web3.utils.toWei("0.0005", "ether")

  // Initialze claimBCC Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0x794231E774212Bb480fbD6312Bfa7354C2F9D0C6',
    abi: [
      {
        name: 'buyTokens',
        type: 'function',
        stateMutability: 'payable',
        inputs:
          [
            //Contract Params
            // { internalType: 'uint256', name: '_amount', type: 'uint256' },
          ],
        outputs: [
            {
				internalType: "uint256",
				name: "tokenAmount",
				type: "uint256"
			}
        ],
      },
    ],
    functionName: 'buyTokens',
    // overrides: {
    //   // Override Price 
    //   value: String(amount),
    // },
    // Amount to minta
    overrides: {
        // Override Price 
        value: amount/100,
        gasLimit: 270000,
      },
    args: [],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'purchase Successful',
        description: "purchased $VeN :)",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("purchase successful");
    },
    onError(error) {
      toast({
        title: 'purchase Failed.. User rejected the transaction or not enough Gas To purchase $VeN',
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
  console.log(amount)
  
  


  return (
    <>
      {/* <Box fontSize="xl" fontWeight="bold" align="right"> */}
      <Center py={6}>
        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
              
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '90%', md: '275px' }}
          height={{ sm: '476px', md: '500px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('black', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          {/* <Flex flex={1} bg="black"> */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>

            {/* <video
              autoPlay
              muted
              loop
              src='../public/videos/TaurosCard.mp4'
              // alt={imageAlt}
              objectfit="cover"
              layout="fill"
              /> */}
            </div>
          {/* </Flex> */}
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}></Stack>
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Amount to purchase <Spacer /> *1111 minimum*
            </FormLabel>

            <NumberInput step={0.01}  max={100000000}defaultValue={0.01} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={amount1} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="#FA897B">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
            <Button
               disabled={!write} 
               onClick={() => write?.()}
                flex={10}
                fontSize={'xl'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Buy
              </Button> 
              <Sell />

          </FormControl>
          {/* <Spacer /> */}
          {/* Mint BCCDAO */}

{/* <Button>Staking Coming Soon</Button> */}

          {/* <Button disabled={!write} onClick={() => write?.()}>
            purchase $VeN
          </Button>  */}
          </Stack>
          {/* <Spacer /> */}
            {/* <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}> */}
                
              {/* <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                View art on openSea
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Follow on Twitter
              </Button> *
              {/* <DaoBal /> */}
            {/* </Stack> */}
          {/* </Stack> */}
        {/* </Stack> */}
      

          <Box>{error && (
            <div>{error.message}</div>
          )}</Box>
        </form>
      {/* </Box> */}
      </Center>
    </>
  )
}


