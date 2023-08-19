import { Grid } from '@chakra-ui/react';
import Comment from "../components/Comment";
import Products from "../components/Products";
import VideoFrame from "../components/VideoFrame";

export default function VideoDetail(){
    return (
        <Grid templateColumns="repeat(7, 1fr)" templateRows="repeat(2, 1fr)">
            <VideoFrame />
            <Comment />
            <Products />
        </Grid>
    )
}