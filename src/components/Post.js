import { Flex } from "@chakra-ui/react";

const Post = ({ id, title, type, imgUrl, tags, place, modalContent }) => {
  return (
    <Flex
      justify="space-evenly"
      bg="linkedin.50"
      shadow="base"
      borderRadius="base"
      w="100%"
      flexDir="column"
      align="center"
      p="5"
    >
      <h1>{title}</h1>
      <h6>{type.name}</h6>
    </Flex>
  );
};
export default Post;
