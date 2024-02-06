import { Avatar,Button, Container, Heading, Input,  VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <Container maxWidth={Container.xl} h={'150vh'} p={'16'}>
    <form>
      <VStack  spacing={'10'} w={'100'} m={'auto'} my={'16'} alignItems={'center'}>
          <Heading >VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'40'}/>
          <Input
          placeholder={'Name'} 
          type='Name' 
          required 
         focusBorderColor ={"purple.500"}
         color='purple'
         
          />
          <Input
          placeholder={'Password'} 
          type='Password' 
          required 
          focusBorderColor={'purple.500'}></Input>
           
           <Input
          placeholder={'Contact'} 
          type='Number' 
          required 
          focusBorderColor={'purple.500'}></Input>
         

         <Button colorScheme={'purple'} type='submit'>
          Signup
         </Button>
         
         <Button variant={'link'} >
          <Link to={
          '/login'
          }>Already Signup ?</Link>
         </Button>

      </VStack>
    </form>
</Container>
  )
}

export default Register