import Head from 'next/head'
import { Box, Center, Image, Text, List, ListItem, ListIcon, Heading } from "@chakra-ui/react"
import { ImEarth } from 'react-icons/im'

export default function EventsPage() {
            
    return (
        <Box>
            <Head>
                <title>
                    Current Gallery Location | Locations Offered
                </title>
            </Head>
            <Heading pb={10} fontSize="3xl" textShadow='0.5px 0.5px white'>
                Locations Offered
            </Heading>

            <Text pt={5}>
                {/* Current Events that accept YappolaAir */}
                {/* Thank Your For Visiting  */}
            </Text>

                <List py={5} ml={5} spacing="2">
                    <ListItem>
                        <ListIcon as={ImEarth} />
                        Location  <br />
                        Location: Istanbul, Turkey <br />
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Location:  Norfolk, Va
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                         Location3 (Athens,Greece)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Location4 (Egypt)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                    {/* <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Location5 (Arizona)
                    </ListItem> */}
                    <br />
                    <br />
                    <br />
                    <ListItem spacing={3}>
                        <ListIcon as={ImEarth} />
                        Location6 (Wen Moon)
                    </ListItem>
                    <br />
                    <br />
                    <br />
                </List>
{/* 
            <Text>
                Current YappolaAir Eventss/ Locations
            </Text> */}
            
            <Center>
                {/* <Image src="images/Merca_City.png" alt="Merca-City-Map" /> */}
            </Center>
        </Box>
    )
}