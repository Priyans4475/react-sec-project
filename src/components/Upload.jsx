import { Button, Container, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from'react-icons/ai'

const Upload = () => {
  return (
    <Container maxWidth={Container.xl} h={'100vh'} p={'16'} >
    <VStack color={'purple'} height={'full' } justifyContent={'center'}>
    <AiOutlineCloudUpload size={'200'}/>
    <form>
      <HStack>
        <input required type='file'></input>
        <Button colorScheme='purple'>Uploads</Button>
      </HStack>
    </form>
    </VStack>
    </Container>
  )
}

export default Upload