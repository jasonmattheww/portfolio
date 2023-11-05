'use client'

import NavBar from '../components/NavBar';
import Transition from '../components/Transition';
import { Box, Center, Heading, Text, Image, Link, Stack, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './styles.css';

export default function Home() {
  const headText = {
    color: '',
    textDecoration: 'underline',
    textDecorationThickness: '1px',
    textUnderlineOffset: '9px',
  }

  const pText = {
    textIndent: '15px',
    letterSpacing: '1px',
    lineHeight: '1.9',
    paddingTop: '5px',
    color: '',
  };

  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <main>
      <NavBar />
      <Transition>
      <Center>
        <Box maxW='600px' w='100%' textAlign='left'>

          <Center>
            <Box textAlign='center' pt='50px'>
              <Text className='typewriter'>Welcome 👋</Text>
            </Box>
          </Center>

          <Flex className='flex-container' justifyContent='center' pt='25px'>
            <Box className='flex-item'>
              <Heading as='h1' pr='50px' pt='15px'>Jason Torrealba</Heading>
            </Box>
            <Box className='flex-item'>
              <Image src='/profilepic.jpg' alt='profile pic' boxSize='100px' style={{ borderRadius: '50%' }} />
            </Box>
          </Flex>

          <Box className='remove-padding-top' pb='5px' pt='25px'>
            <Heading as='h3' style={headText}>About</Heading>
            <Text style={pText}>
              Hi, my name is Jason Torrealba i'm a passoniate software developer who likes to build applications and learn about new technologies.
              In my free time I like to go out to be in nature, read, spend time with family, play soccer, and work out.</Text>
          </Box>

          <Box>
            <Heading as='h3' style={headText}>Contact</Heading>
            <Text style={pText}>Want to connect or have any questions feel free to contact me at any of these links down below.</Text>

            <Box textAlign='center' pt='10px'>
              <Stack spacing={2} gap='25px' fontSize='18px'>

                <Flex justifyContent='center'>
                  <Link href='mailto:jasontorrealba199@gmail.com' isExternal {...linkStyles} _hover={{ opacity: 0.7 }}>
                    <Box border='2px solid #7b7b7b' px='33px' borderRadius='5px' display='flex' alignItems='center'>
                      <FaEnvelope size={16} />
                      <Text pl='10px'>Email</Text>
                    </Box>
                  </Link>
                </Flex>

                <Flex justifyContent='center'>
                  <Link href='https://www.linkedin.com/in/jason-torrealba/' isExternal {...linkStyles} _hover={{ opacity: 0.7 }}>
                    <Box border='2px solid #7b7b7b' px='21px' borderRadius='5px' display='flex' alignItems='center'>
                      <FaLinkedin size={16} />
                      <Text pl='10px'>LinkedIn</Text>
                    </Box>
                  </Link>
                </Flex>

                <Flex justifyContent='center'>
                  <Link href='https://github.com/jasonmattheww' isExternal {...linkStyles} _hover={{ opacity: 0.7 }}>
                    <Box border='2px solid #7b7b7b' px='27px' borderRadius='5px' display='flex' alignItems='center'>
                      <FaGithub size={16} />
                      <Text pl='10px'>GitHub</Text>
                    </Box>
                  </Link>
                </Flex>

              </Stack>
            </Box>
          </Box>
        </Box>
      </Center>
    </Transition >
    </main>
  );
}