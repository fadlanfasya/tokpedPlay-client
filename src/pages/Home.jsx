import { SimpleGrid} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";

export default function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://tokpedplay.up.railway.app/api/videos')
        .then((res) => res.json())
        .then(videos => setVideos(videos))
        .catch((err) => console.error(err));
    }, []);

    return (
        <SimpleGrid spacing={6} minChildWidth="200px" p="30px 30px 30px 30px">
            {videos && videos.map(video => (
                <Cards key={video._id} video={video}></Cards>
            ))}
        </SimpleGrid>
    )
}

// export const videosLoader = async () => {
//     const res = await fetch('http://localhost:3000/api/videos/');
//     return res.json();
// }