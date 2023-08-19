import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from './ProductCard';

export default function Products() {
    const {_id} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://tokpedplay.up.railway.app/api/videos/${_id}`)
        .then(res => res.json())
        .then(videos => setVideos(videos.productId))
        .catch((err) => console.error(err));
    }, []);

  return (
    <GridItem colSpan="5" border="8px solid" borderColor="green.500" boxShadow="8px 8px" pY="30px" m="30px">
        <Heading p="30px 30px 0px 30px">Product Collections</Heading>
        <SimpleGrid templateColumns="repeat(3, 1fr)" justifyItems="center" paddingY="10px" spacing={5}>
            {videos.map(video => (
                <ProductCard key={video._id} colSpan="1" product={video}/>
            ))}
        </SimpleGrid>
    </GridItem>
  )
}
