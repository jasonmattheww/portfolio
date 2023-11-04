import { Flex, Link, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

const NavBar = () => {
  const linkStyles = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <Box as='nav' display='flex' justifyContent='center' p='20px'>
      <Flex wrap='wrap' align='center' justify='space-between' maxWidth='600px' width='100%' p={4}>
        <Link as={NextLink} href='/' {...linkStyles} _hover={{ textDecoration: 'underline' }}>
          Home
        </Link>
        <Link as={NextLink} href="/projects" {...linkStyles} _hover={{ textDecoration: 'underline' }}>
          Projects
        </Link>
        <Link as={NextLink} href="/resume" {...linkStyles} _hover={{ textDecoration: 'underline' }}>
          Resume
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
