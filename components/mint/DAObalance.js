import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount, useContractRead } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import {
  Badge,
  Link,
  useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import tIDs from "./Ids";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
export default function DaoBal() {
  const [amount, setAmount] = React.useState(1111)
  const handleChange = (value) => setAmount(value)
  // Fetch user address
  const { address,isConnected } = useAccount()

  const {data, isError, isLoading,isSuccess}= useContractRead({
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

  const {Id}= useContractRead({
    address: '0x209999D71C5D422dB0d1ce92860d75475608fFad',
    abi: [
        {
          name: 'walletOfOwner',
          type: 'function',
          stateMutability: 'view',
          inputs:
          [
            {
              internalType: "address",
              name: "_owner",
              type: "address"
            }
        ],
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]"
            }
        ],
        },
      ],
    functionName: "walletOfOwner",
    args: [address]
  })

  console.log(isError)
  console.log(isSuccess)
   console.log(data)


  return (
    <>
      {/* <Box fontSize="xl" fontWeight="bold" align="right"> */}
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '400px' }}
          height={{ sm: '476px', md: '400px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('black', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          {/* <Flex flex={1} bg="black"> */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
{/* 
              <Image
                objectFit="fill"
                boxSize="100%"
                // sizes='100vw'
                src={
                  'https://pbs.twimg.com/media/FxSM1ndXsAA5IR2?format=jpg'
                }
              /> */}
            </div>
          {/* </Flex> */}
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>

              <Image
                objectFit="fill"
                // boxSize="100%"
                // sizes='100vw'
                src={
                  'images/47.jpg'
                }
              />
            </div> */}
      <Heading><Text fontWeight={300} color={'white'} size="sm" mb={4}>Your DAO Balance: {String(data)}</Text></Heading>
      <Text color={'white'} size="sm">Must Wait 7 Days to remove DAO stake</Text> 
      {/* <Heading>Your $TAU Balance: {data1}</Heading>  */}
      </Stack>
            <Spacer />
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
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
              </Button> */}
<tIDs />
            </Stack>
          </Stack>
        {/* </Stack> */}
      </Center>
      {/* </Box> */}
    </>
  )
}


