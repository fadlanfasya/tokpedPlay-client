import { Box, Button, Container, HStack, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const Comments = ({socket}) => {
  const videoId = useParams();
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  const [userId, setUserId] = useState("");

  const sendComment = () => {
    if (socket) {
      socket.emit("chatboxComment", {
        videoId,
        comment: commentRef.current.value,
      });
      commentRef.current.value = "";
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("CC_TOKEN");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newComment", (comment) => {
        const newComment = [...comments, comment];
        setComments(newComment);
      });
    }
  }, [comments]);

  useEffect(() => {
    if (socket) {
      socket.emit("inRoom", { videoId });
    }

    return () => {
      if (socket) {
        socket.emit("outRoom", { videoId });
      }
    }
  }, []);

  return (
    <Container>
      <VStack>
        {comments.map((comment, id) => (
          <Box key={id} className="comment">
            <span
              className={
                userId === comment.userId ? "ownMessage" : "otherMessage"
              }
            >
              {comment.name}
            </span>{" "}
            {comment.comment}
          </Box>
        ))}
      </VStack>
      <HStack>
        <Box>
          <Input 
            type="text"
            name="comment"
            placeholder="Comment"
            ref={commentRef}
          />
        </Box>
        <Button onClick={sendComment}>Send</Button>
      </HStack>
    </Container>
  );
};

export default Comments;