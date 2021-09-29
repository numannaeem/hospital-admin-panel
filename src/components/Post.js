import {
  Flex
} from '@chakra-ui/react'

const Post = ({ id, title, type, imgUrl, tags, place, modalContent }) => {
  return (

    <Flex justify='space-evenly' bg='linkedin.50' shadow='base' borderRadius='base' w='80vw' h='16'>
      <h1>{title}</h1>
    </Flex>

  )
}
export default Post
