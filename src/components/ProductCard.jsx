import { Card, CardBody, CardHeader, Heading, Image, Text } from "@chakra-ui/react";
import { Link as CardLink } from 'react-router-dom';

export default function ProductCard(props) {
  return (
    <Card as={CardLink} to={props.product.urlProduct} width="260px">
        <CardHeader>
          <Heading as="h3" size="sm">
            {props.product.productTitle}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image src={props.product.productImg} height="200px" width="200px" />
          <Text fontWeight="bold">{props.product.price}</Text>
        </CardBody>
    </Card>
  )
}
