import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import  img1 from '../assets/1.jpg';
import  img2 from '../assets/2.jpg';
import  img3 from '../assets/3.jpg';
import  img4 from '../assets/4.jpg';
import  img5 from '../assets/5.png';



const Home = () => {
  return (
    <Box>

      <Mycarousel/>
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py='2'
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}>
           Services
        </Heading>
        <Stack h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deeg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime numquam minima iusto aut similique illum dolorum provident facilis exercitationem! Corporis voluptatem facilis ab doloribus esse quis n
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, adipisci. Qui aliquid iste ad ex natus. Veniam officia aliquam dolores nihil consequatur ullam culpa quidem maiores, sequi magnam, iure quas!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptatibus assumenda aliquid enim quo explicabo, magnam possimus illum accusamus aliquam alias dolorum quibusdam harum velit voluptas. Totam nihil eius culpa.eque velit cum. 

            </Text>
        </Stack>
      </Container>
     
    </Box>
  )
}
const headingOption={
   pos:'absolute',
   left:'50%',
   top:'50%',
   transform:'translate(-50%,-50%)',
   textTransform:'uppercase',
   p:'4',
   size:'4xl',


};

const Mycarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={'full'} h={'100vh'}>
     <Image src={img1} alt='img1'/>
     <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        Watch The Future</Heading>
     
    </Box>

    <Box w={'full'} h={'100vh'}>
     <Image src={img2} alt='img2'/>
     <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        Future is Gaming</Heading>
     
    </Box>
    <Box w={'full'} h={'100vh'}>
     <Image src={img3} alt='img2'/>
     <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        Gaming on console</Heading>
     
    </Box>
    <Box w={'full'} h={'100vh'}>
     <Image src={img4} alt='img2'/>
     <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
        Night life is cool</Heading>
     
    </Box>
   
    </Carousel>
)

export default Home