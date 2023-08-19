import { Box, Button, Container, Flex, FormControl, GridItem, HStack, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useParams, Form } from "react-router-dom";

import Comments from "./Comments";

const Comment = () => {
  const id = useParams();
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your backend server for authentication
      // const response = await axios.post('https://tokpedplay.up.railway.app/api/login/', { email, password });
      const response = await fetch(`https://tokpedplay.up.railway.app/api/comments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment, username }),
      });

      const data = await response.json();

      // Check if login was successful
      if (data.message) {
        console.log('Comment Success');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <GridItem rowSpan="1" colSpan="2" border="8px" borderColor="green.500" margin="30px 30px 30px 0px">
      <Comments />
      <Flex direction="row" position="sticky" bottom={0}>
      <form onSubmit={handleSubmit}>
      <FormControl
        
        p={2}
        zIndex={3}
        as="form"
        display="flex"
        alignItems="center"
      >
        <VStack>
        <Input
          type="text"
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="lg"
          placeholder="Input Username"
          border="1px solid"
        />
        <HStack>
          <Input
            type="text"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            size="lg"
            placeholder="Type Message"
            border="1px solid"
          />
          <Button size="lg" type="submit">
            Send
          </Button>
        </HStack>
        </VStack>
      </FormControl>
      </form>
      </Flex>
    </GridItem>
  );
};

export default Comment;