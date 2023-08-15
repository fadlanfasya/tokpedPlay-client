import React from 'react'
import { useState } from 'react';
import { Box, FormControl, FormHelperText, FormLabel, Input, Container, Button, Heading, HStack, useToast } from '@chakra-ui/react';
import { Form, Link, redirect } from 'react-router-dom';

export default function Register() {
  const toast = useToast()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your backend server for authentication
      // const response = await axios.post('https://tokpedplay.up.railway.app/api/login/', { email, password });
      const response = await fetch('https://tokpedplay.up.railway.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      // Check if login was successful
      if (data.message) {
        console.log("Registration successful");
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Container marginTop="30px" marginBottom="30px" boxShadow="12px 12px" maxW="480px" border="4px" borderColor="green.500">
        <Form onSubmit={handleSubmit}>
            <Heading padding="30px 30px 0px 30px">Register</Heading>
            <FormControl  p="30px 30px 5px 30px">
                <FormLabel>Name :</FormLabel>
                <Input 
                type="text" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                borderRadius="0px"
                borderColor="green.500"
                boxShadow="8px 8px" />
                <FormHelperText>Input your name</FormHelperText>
            </FormControl>
            <FormControl  p="30px 30px 5px 30px">
                <FormLabel>Email :</FormLabel>
                <Input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderRadius="0px"
                borderColor="green.500"
                boxShadow="8px 8px" />
                <FormHelperText>Input your email</FormHelperText>
            </FormControl>
            <FormControl  p="30px 30px 5px 30px">
                <FormLabel>Password :</FormLabel>
                <Input 
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderRadius="0px"
                borderColor="green.500"
                boxShadow="8px 8px" />
                <FormHelperText>Input your password</FormHelperText>
            </FormControl>
            <HStack>
              <Button colorScheme='green' borderRadius="0px" m="30px" type='submit'>
                <Link>
                  Register
                </Link>
              </Button>
              <Link to="/login"><u>Already Have an Account? Login Here</u></Link>
            </HStack>
        </Form>
    </Container>
  )
}
