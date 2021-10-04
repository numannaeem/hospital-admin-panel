import {
  Flex, useDisclosure, Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

const Post = ({ id, title, type, imgUrl, dept, fect, about, history, management, doctor, nurse, doctor_count, nurse_count, management_count, hospital_images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      onClick={onOpen} cursor='pointer'
      justify='space-evenly'
      bg='linkedin.50'
      shadow='base'
      borderRadius='base'
      w='100%'
      flexDir='column'
      align='center'
      p='5'
    >
      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' size='full'>
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Type:{String(type)}
            About:{String(about)}
            Staff:{String(management + doctor + nurse)}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <h1>{title}</h1>
      <h6>{type.name}</h6>
      <h6>{doctor_count}</h6>
      <h6>{nurse_count}</h6>
      <h6>{management_count}</h6>
    </Flex>
  )
}
export default Post
