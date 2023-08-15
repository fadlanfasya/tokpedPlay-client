import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function ProductCard(props) {
  return (
    <Card>
        <CardHeader>
            <Heading>{props.video.productTitle}</Heading>
        </CardHeader>
    </Card>
  )
}
