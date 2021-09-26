import Sidebar from './components/Sidebar'
import { Flex } from '@chakra-ui/layout'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Flex>
        <Sidebar />
      </Flex>
    </BrowserRouter>
  )
}

export default App
