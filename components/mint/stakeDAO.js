import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
import DaoBal from "./DAObalance";
import {
  Badge,
  Link,
  useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import Unstake from "./DAOunstake";
export default function Stake() {
  const [amount, setAmount] = React.useState(0)
  const handleChange = (value) => setAmount(value)

  // const [tokenId, setTokenId] = React.useState()
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //NFT Price : TODO fetch price from Contract for automatic update
  const price = Web3.utils.fromWei("50000000000000000", "wei")

  // Initialze claimNFT Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0xc11Aab3e363e3Ca9Ff5e7E82c6298004C39B7Ec2',
    abi: [
      {
        name: 'DAOstake',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs:
          [
            //Contract Params
            { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'DAOstake',
    overrides: {
      // Override Price 
      gasLimit: 400000,
    },
    // Amount to minta
    args: [amount],
    // enabled: Boolean(tokenId),
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Stake Successful',
        description: "staked NFT",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Stake successful");
    },
    onError(error) {
      toast({
        title: 'Stake Failed.. User rejected the transaction or not enough Ether To Purchase NFT',
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
  // console.log(data)
  // console.log(write)
  // console.log(price * amount)
  String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

  var image = "https://ipfs.io/ipfs/Qmb2BTV5Uw6kYeSPa4cYE6DHSPv7ip8UcAA4dYXCnVPfQU/{}.jpg".format(String(amount))
  console.log(image)
  // if (!isConnected && data<1)
  // return (
  //   <>
  //   <Header />
  //   <Center>
  //   <h1>Please connect wallet to access Governance</h1>
  //   </Center>
  //   </>
  // );

  // if (isConnected && data<1)
  // return (
  //   <>
  //   <Header />
  //   <Center>
  //   <h1>Must own One TaurosDAO to Propose and Vote</h1>
  //   </Center>
  //   </>
  // );

  // if (isConnected && data>=1)
  return (
    <>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '500px' }}
          height={{ sm: '476px', md: '600px' }}
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
              src='../public/videos/NFTCard.mp4'
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
            <Heading fontSize={'2xl'} color={'white'}>
             Stake NFTDao
            </Heading>
            <Text fontWeight={600} color={'white'} size="sm" mb={4}>
              Enter Token ID to Stake
            </Text>
         {/* <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}> */}
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              TokenID
            </FormLabel>

            <NumberInput step={1} min={0} max={7110} defaultValue={0} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="teal.300">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          {/* <Spacer /> */}
          <Button onClick={() => write?.()}>
            Stake DAO
          </Button> 
          <img src={image} />
          {/* <Spacer /> */}
          {/* <Heading fontSize={'2xl'} color={'white'}>
             Remove NFTDao Stake
            </Heading>
            <Text fontWeight={600} color={'white'} size="sm" mb={4}>
              unStake NFTDAO
            </Text> */}
          <Unstake />
          </Stack>
          {/* <Unstake /> */}

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
              <DaoBal />
              {/* <Unstake /> */}
            </Stack>
          </Stack>
        {/* </Stack> */}
      </Center>
    </>
  )
}


