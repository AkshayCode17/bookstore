import { Box, Button, Grid, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const MiddleCard = () => {
    return (
        <Box w="87%" margin="auto"  marginTop="20px" >
            {/* Left Box */}
            <Grid templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(2,1fr)" }} >
                <Box   h="auto" paddingBottom="20px" display="flex" flexDirection="column" justifyContent="space-around"  >
                    <Box>
                        <Text fontSize='2xl' as='b' >Hello,Welcomes You To Learn </Text>
                        <Text fontSize='2xl' as='b' > Something  <Text as="span" color="pink.500">New Everday!!!</Text> </Text>
                    </Box>
                    <Box paddingBottom="20px" >
                        <Input paddingLeft="5px" variant='flushed' placeholder='Enter Email' />
                    </Box>
                    <Box paddingBottom="20px" >
                        <Button variant='outline' colorScheme='pink' >Get Started</Button>
                    </Box>
                </Box>

                <Box  display="grid" placeItems="center" backgroundColor="white" >
                    <Image w="auto" h="300px" objectFit="cover" src='https://i.pinimg.com/736x/b6/a5/96/b6a5967749f41c3dc135685ef5996197.jpg' />
                </Box>
            </Grid>

            {/* Right Box */}


        </Box>
    )
}

export default MiddleCard
