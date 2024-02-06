import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
      ];

      const [videosrc,setVideoSrc]=useState(videosArr[0])
  return (
    <Stack direction={['column','row'] } h={'140vh'}>
        <VStack w={'full'} p={'5'} >
        <video 
        src={videosrc}
        controls
        controlsList='nodownload'
        style={
            {width:'100%'}
        }
        ></video>

        <VStack alignItems={'flex-start' } p={'8'} overflowY={'auto'}  >
        <Heading>My Video Lecture</Heading>
        <Text letterSpacing={'6'}
        lineHeight={'8'}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nemo? Provident, corporis similique? Quisquam, corporis voluptates qui quidem ad eveniet suscipit aspernatur impedit cum sit atque earum. Iure, reprehenderit laudantium?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo aliquam in, cupiditate voluptates velit ipsum nihil temporibus labore quam consequuntur earum aut laudantium veniam dolore dignissimos, voluptatem fugiat vero.

            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quasi consequuntur aliquam, magnam voluptatibus dignissimos ullam cum est maxime quam praesentium ad accusamus sapiente omnis Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error suscipit autem, qui optio quos culpa atque dolorum fuga inventore ipsam pariatur voluptates perspiciatis quidem aut. Cumque error fugiat maxime.lorem perspiciatis laborum enim eos soluta.</Text>
        </VStack>
        </VStack>

        <VStack w={['full','xl']} padding={'8'} spacing={'10'} overflowY={'auto'} > 
        {videosArr.map((item,index)=> (
            <Button 
            variant={'ghost'}
            bgColor={'purple'}
            color={'white'}
            colorScheme='purple'
            height={'10'}
            onClick={()=>setVideoSrc(item)}>
             My lecture {index+1}
            </Button>
        ))}
        </VStack>
    </Stack>
  )
}

export default Videos