import Sidebar from './components/Sidebar'
import { Flex } from '@chakra-ui/layout'
import { BrowserRouter } from 'react-router-dom'
import PostsArea from './components/PostsArea'

function App () {
  return (
    <BrowserRouter>
      <Flex h='100vh' w='100vw' justify='center' flexGrow='0' flexBasis='0' align='center'>
        <Sidebar />
        <PostsArea />
      </Flex>
    </BrowserRouter>
  )
}

export default App
