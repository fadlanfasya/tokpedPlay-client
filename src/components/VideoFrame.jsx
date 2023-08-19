import { Box, GridItem, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react'
import ReactPlayer from "react-player";

export default function VideoFrame() {
    const {_id} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://tokpedplay.up.railway.app/api/videos/${_id}`)
        .then(res => res.json())
        .then(videos => setVideos(videos))
        .catch((err) => console.error(err));
    }, []);

    return (
        <GridItem colSpan="5" bg="white" border="8px solid" borderColor="green.500" boxShadow="8px 8px" m="30px" paddingY="30px">
            <Box maxHeight="-webkit-fit-content" paddingX="30px">
                <Heading marginBottom="20px">{videos.title}</Heading>
                <ReactPlayer url={videos.urlVideo} width="100%" controls={true}/>
                <Text marginTop="20px">{videos.desc}</Text>
            </Box>
        </GridItem>
    )  
}
