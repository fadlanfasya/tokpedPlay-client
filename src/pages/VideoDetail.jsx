import { Grid } from '@chakra-ui/react';
import Comments from "../components/Comments";
import Products from "../components/Products";
import VideoFrame from "../components/VideoFrame";

export default function VideoDetail(){
    return (
        <Grid templateColumns="repeat(7, 1fr)">
            <Products />

            <VideoFrame />

            <Comments />
        </Grid>
    )
}