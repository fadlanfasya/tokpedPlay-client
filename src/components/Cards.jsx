import { Spacer, Box, Button, CardFooter, HStack, Icon, Image, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <Card border="8px" borderColor="green.500" bg="white" borderRadius="0px" boxShadow="8px 8px">
      <CardHeader>
        <Heading as="h3" size="sm">
          {props.video.title.split(" ").splice(0, 5).join(" ")}...
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src={props.video.urlThumbnail} />
        <Text color="gray.500">{props.video.desc}</Text>
      </CardBody>
      <CardFooter>
        <HStack spacing={12}>
          <Box>
            <Icon as={ViewIcon} /> {props.video.views}
          </Box>
          <Button colorScheme="green" borderRadius="0px">
              <Link to={`video/${props.video._id}`}>
                <HStack>
                  <Text>Watch</Text>
                  <Icon as={ChevronRightIcon} />
                </HStack>
              </Link>
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}
