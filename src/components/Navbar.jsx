import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <Flex as="nav" shadow="md" p="10px" paddingX="30px" paddingBottom="20px" alignItems="center" position="sticky">
        <Box padding="6px" border="4px" borderColor="green.500" boxShadow="10px 10px">
          <Link to="/">
              <Heading as="h4" color="green.500">TokpedPlay</Heading>
          </Link>
        </Box>
    </Flex>
    // <Flex bg="gray.200" justify="space-around">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="green">2</Box>
    // </Flex>
  )
}
