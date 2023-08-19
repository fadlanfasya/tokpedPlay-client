import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Comments() {
    const {_id} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://tokpedplay.up.railway.app/api/videos/${_id}`)
        .then(res => res.json())
        .then(videos => setVideos(videos.commentId))
        .catch((err) => console.error(err));
    }, []);

  return (
    <Box margin="20px" padding="20px" border="1px solid">
        {videos.map(video => (
            <Text fontWeight="bold">{video.username}: <span>{video.comment}</span></Text>
        ))}
    </Box>
  )
}
