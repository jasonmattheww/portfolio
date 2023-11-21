'use client'

import { FaGithub, FaGlobe } from 'react-icons/fa';
import NavBar from '../../components/NavBar';
import Transition from '../../components/Transition';
import { Box, Center, Heading, Text, Link, Flex, Image } from '@chakra-ui/react';
import '../styles.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      src: '/rhythmreviewsv2.png',
      title: 'Rhythm Reviews',
      description: 'Discover new music and artists with our music review platform, to explore different genres plus read and write reviews.',
      stack: 'React / MongoDB / Node.JS / JWT',
      github: 'https://github.com/group2-project3/rhythm-reviews-2.0',
      website: 'https://rhythm-reviews-v2-a30efa7f58da.herokuapp.com/'
    },
    {
      id: 2,
      src: '/techblog.png',
      title: 'Tech Blog',
      description: 'Tech blog where developers can publish their blog posts and comment on other developers posts.',
      stack: 'MySQL / Express.JS / Node.JS ',
      github: 'https://github.com/jasonmattheww/tech-blog',
      website: 'https://tech-blog-be-43803630257e.herokuapp.com/'
    },
    {
      id: 3,
      src: '/NXTZ Sports.png',
      title: 'NXTZ Sports',
      description: 'Quick and easy way to find your favorite football player stats from all major leagues across the world.',
      stack: 'JS / RapidAPI / TheSportsDB API',
      github: 'https://github.com/zach-hoover/NXTZ-sports',
      website: 'https://zach-hoover.github.io/NXTZ-sports/'
    },
    {
      id: 4,
      src: '/weatherapp.png',
      title: 'Weather App',
      description: 'Search multiple cities to see what the current forecast is as well as the next five days.',
      stack: 'JS / Open Weather API',
      github: 'https://github.com/jasonmattheww/weather-app',
      website: 'https://jasonmattheww.github.io/weather-app/'
    },
  ];

  const roundedImage = {
    borderRadius: '10px',
  };

  const projectContainer = {
    display: 'flex',
    alignItems: 'flex-start',
    mb: 4,
    pt: '30px',
  };

  const iconStyle = {
    color: 'black',
    textDecoration: 'none',
    paddingLeft: '5px',
  };

  return (
    <Box>
      <NavBar />
      <Transition>
        <Center>
          <Box maxW='600px' w='100%' textAlign='left'>
            <Heading as='h1' mb={4} textDecoration='underline' textUnderlineOffset='9px' className='project-title'>
              Projects
            </Heading>

            {projectsData.map((project) => (
              <Box key={project.id} sx={projectContainer} className='project-container'>
                <Link href={project.website} isExternal className='project-image'>
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={250} height={140}
                    style={roundedImage}
                  />
                </Link>
                <Box ml='30px' flex='1' className='project-details'>
                  <Flex flexDirection='row' justifyContent='space-between' alignItems='center'>
                    <Heading as='h3' mt={0} mb={2}>
                      {project.title}
                    </Heading>
                    <Box>
                      {project.github && (
                        <Link href={project.github} isExternal style={iconStyle} mr={2}>
                          <FaGithub size={16} />
                        </Link>
                      )}
                      {project.website && (
                        <Link href={project.website} isExternal style={iconStyle}>
                          <FaGlobe size={16} />
                        </Link>
                      )}
                    </Box>
                  </Flex>
                  <Text mt='15px'>{project.description}</Text>
                  <Flex className='stack-center'>
                    <Box as='b' color='#cb1d1d' pr='5px' className='stack-margin'>
                      Stack: 
                    </Box>
                    <Text as='span' fontSize='15px' pt='1px'>
                      {project.stack}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            ))}

          </Box>
        </Center>
      </Transition>
    </Box>
  );
};

export default Projects;
