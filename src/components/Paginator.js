import { Skeleton, Button, ButtonGroup } from '@chakra-ui/react'
import {
  ArrowBackIcon,
  ArrowForwardIcon
} from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'

const Paginator = ({ prefix, currentPage, totalPages }) => {
  // const [searchQueries, updateSearchQueries] = useState(queryString.parse(location.search))
  const history = useHistory()

  // array frm 1 to totalPages in locations 0...totalPages-1
  const pageNos = [...Array(totalPages + 1).keys()].slice(1, totalPages + 1)
  const pageButtons = pageNos.map((no, index) => (
    <Button
      key={index}
      onClick={() => {
        history.push(`/${prefix}?pageNo=${no}`)
      }}
    >
      {no}
    </Button>
  ))
  pageButtons[+currentPage - 1] = (
    <Button key={+currentPage - 1} isActive>
      {+currentPage}
    </Button>
  )
  return (
    <Skeleton borderRadius='base' p='2' isLoaded={totalPages}>
      <ButtonGroup mb='1'>
        <Button
          disabled={+currentPage === 1}
          onClick={() => {
            history.push(`/${prefix}?pageNo=${+currentPage - 1}`)
          }}
        >
          <ArrowBackIcon />
        </Button>
        {pageButtons.slice(+currentPage - 1, +currentPage + 3)}
        <Button
          disabled={+currentPage === totalPages}
          onClick={() => {
            history.push(`/${prefix}?pageNo=${+currentPage + 1}`)
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </Skeleton>
  )
}
export default Paginator
