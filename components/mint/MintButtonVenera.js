import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter,Image,Stack } from '@chakra-ui/react'

import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function MBV() {
  const [amount, setAmount] = React.useState(1)
  const handleChange = (value) => setAmount(value)
  // Fetch user address
  const { address } = useAccount()
  console.log(address)
  const toast = useToast()

  //Tauros Price : TODO fetch price from Contract for automatic update
  const price = Web3.utils.toWei("0.008", "ether")

  // Initialze claimTauros Contract write
  const { config, error } = usePrepareContractWrite({
    address: '0x065a08Ac19592fF21Ef287b8F1d4Cc4dFa558BE5',
    abi: [
      {
        name: 'claim',
        type: 'function',
        stateMutability: 'payable',
        inputs:
          [
            //Contract Params
            { internalType: 'uint256', name: '_count', type: 'uint256' },
          ],
        outputs: [],
      },
    ],
    functionName: 'claim',
    overrides: {
      gasLimit: 270000,
      // Override Price 
      value: String(price * amount),
    },
    // Amount to minta
    args: [amount],
  })
  console.log(config)
  console.log(error)
  
  // Contract Write
  const { data, write } = useContractWrite({
    ...config,
    onSuccess(data){
      toast({
        title: 'Mint Successful',
        description: "deployed Circle :)",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      console.log("Mint successful");
    },
    onError(error) {
      toast({
        title: 'Mint Failed.. User rejected the transaction or not enough Ether To Purchase TAUROS',
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
  console.log(price * amount)


  return (
    
    <>
      <Box fontSize="xl" fontWeight="bold" align="right">

        <form className={styles.btn} onSubmit={async e => {
          e.preventDefault()
        }}>
          
          <FormControl my="4" maxW="210" minW="210">
            <FormLabel htmlFor="amount" textAlign="right">
              Mint Gallery Membership
            </FormLabel>

            <NumberInput step={1} min={1} max={5} defaultValue={1} onChange={handleChange} allowMouseWheel>
              <NumberInputField id="amount" value={amount} bg="gray.200" boxShadow="lg" />
              <NumberInputStepper bg="#FA897B">
                <NumberIncrementStepper borderLeft="none" />
                <Spacer />
                <NumberDecrementStepper borderLeft="none" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Spacer />
          <Button disabled={!write} onClick={() => write?.()}>
        Mint Venera Club 
          </Button>
          {/* <Box>{error && (
            <div>{error.message}</div>
          )}</Box> */}
        </form>
      </Box>
    </>
  )
}


