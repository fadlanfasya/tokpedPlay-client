import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from './ProductCard';

export default function Products() {
    const {_id} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/video/${_id}`)
        .then(res => res.json())
        .then(data => setVideos(data.productCollections))
        .catch((err) => console.error(err));
    }, []);

  return (
    <GridItem as="aside" colSpan="1" bg="green.500" minHeight="100vh">
        <SimpleGrid justifyItems="center" paddingY="10px" spacing={5}>
            {videos && videos.map(video => {
                <ProductCard key={video.productId._id} video={video} />
            })}
        </SimpleGrid>
    </GridItem>
  )
}
