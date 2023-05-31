import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cardVariant, parentVariant } from '@components/animations/motion'
import products from '@components/data/products/'
import ProductCard from '@components/cards/ProductCard'
import ProductModal from '@components/cards/ProductModal'
import { Box, Button,Flex, Spacer, Center, Grid, HStack, SimpleGrid, Text, Link, Heading, Collapse, useDisclosure, IconButton } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
// import Title, { LU } from '@components/animations/AnimatedTitles'
import { useInView } from 'react-intersection-observer'
import MBV from '@components/mint/MintButtonVenera'
import { Textarea } from '@nextui-org/react';

const MotionSimpleGrid = motion(SimpleGrid)
const MotionBox = motion(Box)
const MotionIconButton = motion(IconButton)

export default function Home() { 
  const [modalData, setModalData] = useState(null)
  const { isOpen, onToggle } = useDisclosure()
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: false
  });

  const buttonVariants = {
    initial: {
      scale: 1
    },
    whileInView: {
      scale: [1.5, 1],
      transition: {repeat: Infinity, type: "spring", duration: 2}
    },
    hover: {
      color: "#008080"
    },
    tap: {
      scale: 2
    }
  }

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
  };

  return (
    <Box>
        <Head>
            <title>
                Venera Club | Dashboard
            </title>
        </Head>

        {/* <Center><Heading>Welcome To Venera Club</Heading></Center> */}
        <Box alignContent="center">

            <Box textStyle="landingPageContent" mb={10} pb={0}>
              
                     <Text textStyle="content"><font color="#010332"> 
                       
                        Edit this with a more solid description stating benefits of the membership mint
                       
                       </font> </Text>
              
            <Text textStyle="content"><font color="#010332">
            <span style={{fontWeight: "400"}}><Center><Heading><Link href="#">Mint a Membership to your favorite gallery</Link></Heading></Center> <Spacer />

            Mint MemberShip To this Art Gallery with a phsycal pass <h1>EDIT:  </h1>
            
            <Spacer /> Further Explain Membership privelages </span> <Spacer /> Price and amount of Memberships in existence
            <Spacer /> 
            Benefits after mint <span style={{fontWeight: "400"}}><Link href='about'> Member benefits token gated functions </Link>...</span>
             </font>
            
            <Center>
          <MBV />
          </Center>

          <Center>


<h1>Advertisement Video</h1>
<video 
          // className={styles.aboutTrailer}
          // src="videos/circles.mp4" 
          alt="generations"
          controls
          objectfit="cover"
          layout="fill"
      /> 



</Center> 
          <Link href="#">See more ...</Link>
            </Text>


            <Text textStyle="content">
            <span style={{fontWeight: "400"}}>
            {/* <Heading pt={20}></Heading> */}
            <Heading pt={20}><Link href="#">Please Read Whitepaper</Link> </Heading>

            <Spacer />
           <Center>
            <Text>After Reading Whitepaper feel free to ask our AI chat bot anything </Text>
            <Spacer />
            {/* <div className={styles.center}> */}
            <Textarea status="secondary" 
            placeholder="Enter a prompt"
            onChange={(e) => setPrompt(e.target.value)}
            row="5"
            cols="50"
            
          />
          <Button onClick={getResponseFromOpenAI}>
            Get Response
          </Button>

          <div>
            {isLoading ? (
              <div>Waiting for response ...</div>
            ) : (
              <div>{response}</div>
            )}
          </div>
          {/* </div> */}
          </Center> 
</span>
</Text>
      
            </Box>
        </Box>
        
        {/* <Box p={20} align="center" overflowX="scroll"
          css={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-track': {
              height: '5px',
              background: "white",
            },
            '&::-webkit-scrollbar-thumb': {
              background: "teal",
              borderRadius: '16px',
            },
          }}
          > */}

          {/* <MotionSimpleGrid 
            display="flex"
            mt="4"
            minWidth={{ base: "1500px", md: "2000px" }}
            spacing="10em"
            minH="full"
            variants={parentVariant}
            animate={inView ? "animate" : "initial"}
            ref={ref}
          >
            {products.map((product, i) => (
              <MotionBox variants={cardVariant} key={i}>
                <ProductCard product={product} setModalData={setModalData} />
              </MotionBox>
            ))}
            // </MotionSimpleGrid> */}
            {/* <ProductModal
              isOpen={modalData ? true : false}
              onClose={() => setModalData(null)}
              modalData={modalData}
            /> */}
        {/* </Box> */}

  

    </Box>
  );
}
