import React from "react";
import { usePrepareContractWrite, useFeeData, useContractWrite, useAccount, useContractRead } from 'wagmi'
import { ethers } from "ethers";
import { useToast, Heading, Center, NumberInputStepper, Box, Spacer, NumberIncrementStepper, Button, Input, NumberDecrementStepper, NumberInputField, Text, FormControl, FormLabel, NumberInput } from "@chakra-ui/react"
import styles from "@styles/MintButton.module.css"
import Web3 from "web3";
export default function cBal() {
  const [amount, setAmount] = React.useState(1111)
  const handleChange = (value) => setAmount(value)
  // Fetch user address
  const { address } = useAccount()
  const address1 = address
  console.log(address1)
  const toast = useToast()

  //$VeN Price : TODO fetch price from Contract for automatic update
//   const price = Web3.utils.toWei("0.0005", "ether")

  // Initialze claimBCC Contract write
  const { data, isError, isLoading } = useContractRead({
    address: '0x794231E774212Bb480fbD6312Bfa7354C2F9D0C6',
    abi: [
      {
        name: 'balanceOf',
        type: 'function',
        stateMutability: 'view',
        inputs:
          [
            //Contract Params
            { internalType: 'address', name: 'account', type: 'address' },
          ],
        outputs: [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
        ],
      },
    ],
    functionName: 'balanceOf',
    // overrides: {
    //   // Override Price 
    //   value: String(amount),
    // },
    // Amount to minta
    args: ['0x794231E774212Bb480fbD6312Bfa7354C2F9D0C6'],
  })
//   console.log(config)
  console.log(isError)
  console.log(data)
  const data1 = String(data/1000000000000000000)
  console.log(data1)
//   // Contract Write
//   const { data, write } = useContractWrite({
//     ...config,
//     onSuccess(data){
//       toast({
//         title: 'Compound Successful',
//         description: "Staked $VeN Compunded by ...% :)",
//         status: 'success',
//         duration: 9000,
//         isClosable: true,
//       })
//       console.log("Compoundl successful");
//     },
//     onError(error) {
//       toast({
//         title: 'Compoundl Failed.. User rejected the transaction or not enough Gas To Stake $VeN',
//         description: console.log(error),
//         status: "error",
//         duration: '9000',
//         isClosable: true
//       })
//       console.log(error);
//     },
//     onMutate({ args }) {
//       console.log('Mutate', { args })
//     },
//   })
//   console.log(data)
//   console.log(write)
//   console.log(amount)


  return (
    <>
      {/* <Box fontSize="xl" fontWeight="bold" align="right"> */}

      Your $VeN Rewards: {data1}
      {/* </Box> */}
    </>
  )
}


