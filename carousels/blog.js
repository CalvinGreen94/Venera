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
  useColorModeValue, Grid, HStack, SimpleGrid, Collapse, useDisclosure, IconButton
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from '@styles/MintButton.module.css'
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
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '1000px' }}
          height={{ sm: '476px', md: '550px' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('black', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          {/* <Flex flex={1} bg="black"> */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>

              <Image
                objectFit="fill"
                boxSize="100%"
                // sizes='100vw'
                src={
                  'https://pbs.twimg.com/profile_images/1634895849317621761/UGjvgjHe_400x400.jpg'
                }
              />
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
            <Heading fontSize={'2xl'} color={'white'} fontFamily={'body'}>
              Ecem
            </Heading>
            <Text fontWeight={600} color={'white'} size="sm" mb={4}>
              @VeneraSolutions
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('white', 'white.400')}
              px={3}>
              The talented Ecem's Bio..
              {/* <Link href={'#'} color={'blue.400'}>
              
            </Link> */}
              <Spacer /> Ecem's Tags
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
                #blender
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('white', 'gray.800')}
                fontWeight={'400'}>
                #lilith
              </Badge>
            </Stack>
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
      {/* <img src={`${src}?dog`} alt="dog"/>
      <img src={`${src}?cat`} alt="cat" />
      <img src={`${src}?goose`} alt="goose" />
      <img src={`${src}?rabbit`} alt="rabbit" />
      <img src={`${src}?hedgehog`} alt="hedgehog" /> */}
      {/* </NukaCarousel> */}
    </>

  )

}