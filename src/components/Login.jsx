import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container maxWidth={Container.xl} h={'100vh'} p={'16'}>
          <form>
            <VStack alignItems={'stretch'} spacing={'10'} w={'100'} m={'auto'} my={'16'}>
                <Heading>Welcome back !</Heading>
                
                <Input
                placeholder={'Email'} 
                type='email' 
                required 
               focusBorderColor ={"purple.500"}
               color='purple'
               
                />
                <Input
                placeholder={'Password'} 
                type='Password' 
                required 
                focusBorderColor={'purple.500'}></Input>

               <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={
                '/forgetPassword'
                }>ForgetPassword</Link>
               </Button>

               <Button colorScheme={'purple'} type='submit'>
                Login
               </Button>
               
               <Button variant={'link'} >
                <Link to={'/signup'}>New User ?</Link>
               </Button>

            </VStack>
          </form>
    </Container>
  )
}

export default Login