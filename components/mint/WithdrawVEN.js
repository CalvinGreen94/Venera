import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import {
  Badge,
  Link,
  useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import Rewards from "./rewards";
import CR from "./claimRewards";
import CVen from "./CompoundVen";
export default function WTHAll() {
  const [amount1, setAmount] = React.useState(1111)
  const handleChange = (value) => setAmount(value)
  // const [amount2] = Web3.utils.toBN(amount1) 
  const amount = Web3.utils.toWei(String(amount1),"ether")
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //TAU Price : TODO fetch price from Contract for automatic update
//   const price = Web3.utils.toWei("0.0005", "ether")

  // Initialze claimTAU Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0xc11Aab3e363e3Ca9Ff5e7E82c6298004C39B7Ec2',
    abi: [
      {
        name: 'withdrawAll',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs:
          [
            
          ],
        outputs: [

        ],
      },
    ],
    functionName: 'withdrawAll',
    // overrides: {
    //   // Override Price 
    //   gasLimit: 270000,
    // },
    // 
    args: [],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Withdraw Successful',
        description: "Staked $VeN Withdrawn:)",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Withdrawl successful");
    },
    onError(error) {
      toast({
        title: 'Withdrawl Failed.. User rejected the transaction or not enough Gas To Stake TAU',
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
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '500px' }}
          height={{ sm: '476px', md: '550px' }}
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
        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          {/* <FormControl my="4" maxW="210" minW="210"> */}
            <FormLabel htmlFor="amount" textAlign="right">
              Withdraw $VeN
            </FormLabel>
{/* 
            <NumberInput step={10} min={1111} defaultValue={1111} onChange={handleChange} allowMouseWheel>
            <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="#FA897B">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Spacer /> */}
          {/* Mint TAUDAO */}
          {/* <Button>Withdraw $VeN Not Yet Available</Button> */}


          <Button disabled={!write} onClick={() => write?.()}>
            Withdraw $VeN
          </Button> 
          <CVen />
          


          {/* <Box>{error && (
            <div>{error.message}</div>
          )}</Box> */}
        </form>
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
              <Rewards />
              

              {/* <CR /> */}
            </Stack>
          </Stack>
        {/* </Stack> */}
      </Center>
      {/* </Box> */}
    </>
  )
}


