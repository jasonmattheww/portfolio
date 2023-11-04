'use client'

import { Box, Center, AspectRatio, Link } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Transition from '../../components/Transition';

const Resume = () => {
  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <Box textAlign="center" position='relative'>
      <NavBar />
      <Transition>

        <Center height="85vh" position='relative'>
          <AspectRatio ratio={4 / 4} maxW='800px' w='100%' h='88%'>
            <iframe src="/resume.pdf#view=fitH" width="100%" height="100%" title="Resume"></iframe>
          </AspectRatio>
        </Center>

        <Link href="resume.pdf" download {...linkStyles} _hover={{ textDecoration: 'underline' }}>
          Download Resume
        </Link>
      </Transition >
    </Box>
  );
};

export default Resume;

