import React from 'react'
import {
    Drawer,
    DrawerBody,
    Button,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
  import {BiMenuAltLeft} from 'react-icons/bi';

  import {Link} from 'react-router-dom';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
   <>
   <Button 
   pos={'fixed'}
   top={'4'}
   left={'4'}
   zIndex={'overlay'}
   colorScheme='purple'
   p={'0'}
   width={'10'}
   height={'10'}
   borderRadius={'full'}
   onClick={onOpen}>

    <BiMenuAltLeft size={'20'}/>
   </Button>
   <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
     <DrawerOverlay/>
     <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Video Club</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} colorScheme='purple' variant={'ghost'} >
                  <Link to={'/'}>Home</Link>
                </Button>
                <Button  onClick={onClose} variant={'ghost'} colorScheme='purple' >
                  <Link to={'/videos'}>Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple'  variant={'ghost'}>
                  <Link to={'/videos?categories=free'}>Free Videos</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={'ghost'} >
                  <Link to={'/upload'}>Upload</Link>
                </Button>

            </VStack>

            <HStack pos={'absolute'} bottom={'20'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                 <Button onClick={onClose} colorScheme='purple' variant={'solid'} >
                  <Link to={'/login'}>Login</Link>
                </Button>
                <Button onClick={onClose} colorScheme='purple' variant={'outline'} >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </HStack>
            </DrawerBody>
     </DrawerContent>
   </Drawer>
   </>
  )
}

export default Header