import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Modal,
  ModalContent,
  ModalHeader,
  Image,
  ModalFooter,
  ModalBody,
  Heading,
  ModalCloseButton,
} from "@chakra-ui/react";
import { LoremText } from "../Lorem";

const Post = ({
  id,
  title,
  type,
  imgUrl,
  dept,
  fect,
  about,
  history,
  management,
  doctor,
  nurse,
  doctor_count,
  nurse_count,
  management_count,
  hospitals_images,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      _hover={{ backgroundColor: "#c5e2eb" }}
      onClick={onOpen}
      cursor="pointer"
      justify="space-evenly"
      bg="linkedin.50"
      shadow="base"
      borderRadius="base"
      w="100%"
      flexDir="column"
      align="center"
      p="5"
    >
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="full">
        <ModalContent>
          <ModalHeader textAlign="center">
            <p>
              {title} | <small>{type.name}</small>
            </p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading mb={2} color="linkedin.800" size="md">
              About
            </Heading>
            <p>{String(about) || LoremText}</p>
            <br />
            <Heading mb={2} color="linkedin.800" size="md">
              Staff
            </Heading>
            <p>{String(management + doctor + nurse) || LoremText}</p>
            <br />
            <Heading mb={2} color="linkedin.800" size="md">
              History
            </Heading>
            <p>{String(history) || LoremText}</p>
            <br />
            <Box shadow="lg" rounded="md" p="4">
              <Heading mb={2} color="linkedin.800" size="md">
                Images
              </Heading>
              <Flex flexDir="row" w="100%" mt={4} overflow="auto">
                {hospitals_images.map((i) => (
                  <Image
                    // shadow="lg"
                    rounded="md"
                    fit="cover"
                    mx={2}
                    mb={2}
                    src={i}
                    height={200}
                    width={350}
                    alt="Hospital"
                  />
                ))}
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="linkedin" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <h1>
        {title} <small>( {type.name} )</small>
      </h1>
      <h6>
        <b>Doctors:</b> {doctor_count}
      </h6>
      <h6>
        <b>Nurses:</b> {nurse_count}
      </h6>
      <h6>
        <b>Management:</b> {management_count}
      </h6>
    </Flex>
  );
};
export default Post;
