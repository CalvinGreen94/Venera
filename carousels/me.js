import {
  Box,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  Spacer,
  useColorModeValue, Grid, Avatar, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
// import styles from '@styles/MintButton.module.css'
import styles from '../components/book.module.css'

import { TbArrowBigDownLines, TbArrowBigUpLines } from 'react-icons/tb'
// import Title, { LU } from '@components/animations/AnimatedTitles'
import { useInView } from 'react-intersection-observer'
import MBV from '@components/mint/MintButtonVenera'
import { Textarea } from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack } from '@chakra-ui/react'
import Carousel from "nuka-carousel";
import NukaCarousel from "nuka-carousel";

export default function Me() {
  const src = "https://source.unsplash.com/random/800x800/";

  return (
    <>
      {/* <NukaCarousel cellAlign="center" slidesToShow={1} slidesToScroll={1} cellSpacing={20}> */}

      <Center>
<Heading color={"white"}>Venera Magazine</Heading>
{/* <Text fontSize={"large"}>Artist Spotlight</Text> */}
</Center>


      <Center py={6}>



        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '600px' }}
          height={{ sm: '476px', md: '825px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('black', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          {/* <Flex flex={1} bg="black"> */}
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Avatar name='Ecem' src='https://pbs.twimg.com/profile_images/1661004179417202692/R7LBMvRn_400x400.jpg' />
            <Image
              objectFit="fill"
              // boxSize="100%"
              // sizes='100vw'
              src={
                'https://pbs.twimg.com/media/FxSM1ndXsAA5IR2?format=jpg'
              }
            />
          <Spacer /><br />
            <Image
              objectFit="fill"
              // boxSize="100%"
              // sizes='100vw'
              height={"400"}
              src={
                'https://pbs.twimg.com/media/FxSM1ndXsAA5IR2?format=jpg'
              }
            />
          </div>
          {/* </Flex> */}


          <Stack
            flex={1}
            flexDirection="column"
            // justifyContent="center"
            alignItems="center"
          // p={1}
          // pt={2}
          >
            {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>

              <Image
                objectFit="fill"
                // boxSize="100%"
                // sizes='100vw'
                src={
                  'https://pbs.twimg.com/media/FxSM1ndXsAA5IR2?format=jpg'
                }
              />
            </div> */}
            {/* <Text position={'relative'}>Author: GammaI</Text> */}

            <Heading fontSize={'2xl'} color={'white'} fontFamily={'body'}>
              Title
              <Spacer />
            </Heading>
            <Heading fontSize={'medium'} color={'white'} fontFamily={'body'}>
              Author: Ecem @VeneraSolutions
            </Heading>

            <Spacer />
            <Text
              textAlign={'center'}
              color={useColorModeValue('white', 'white.400')}
              px={3}>
              Ecem is an up-and-coming 3D and 2D digital artist with a great background in Blender and an NFT curator / collector on Tezos and Ethereum. <Spacer /> <br />She has a passion for creating unique and innovative art pieces that are both visually stunning and technically impressive. Her work has been featured in various online galleries and publications. <Spacer /> <br />Her art pieces are often inspired by her own experiences and the world around her, and she is constantly pushing the boundaries of what is possible with digital art. She is also an avid NFT collector, curating her own collection of rare and unique pieces from the Tezos and Ethereum blockchain. She is passionate about the potential of NFTs and the possibilities they bring to the art world, and is always looking for new and exciting ways to use them. <Spacer /><br />  With her unique style and technical skill, Ecem is sure to be a force to be reckoned with in the digital art world.
            </Text>
            {/* <Link href={'#'} color={'blue.400'}>
              
            </Link> */}
            {/* <Spacer /> My Tags
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #AI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge>
            </Stack> */}
            <Spacer />

            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
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
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      <br />
    </>

  )

}