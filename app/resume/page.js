'use client'

import { Box, Center, Link, Image } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Transition from '../../components/Transition';

const Resume = () => {
  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    position: 'absolute',
    paddingTop: '60px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <Box textAlign="center" position='relative'>
      <NavBar />
      <Transition>

        <Center height="85vh" position='relative'>
          <Box border='1px gray solid'>
            <Image src='/resume.png' alt='resume' ></Image>
          </Box>
        </Center>

        <Link href="/resumepdf.pdf" download="resumepdf.pdf" {...linkStyles} _hover={{ textDecoration: 'underline' }}>
          Download Resume
        </Link>
      </Transition >
    </Box>
  );
};

export default Resume;

