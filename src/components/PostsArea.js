import { useState, useEffect } from 'react'
import Post from './Post'
import { Container } from '@chakra-ui/layout'
import Paginator from './Paginator'
import queryString from 'query-string'
import { useLocation, useParams } from 'react-router'

const PostsArea = ({ apiEndpoint }) => {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState(1)
  const { prefix } = useParams()
  const [postsData, setPostsData] = useState({
    count: 10,
    next: null,
    previous: null,
    results: Array(10).fill({
      id: 1,
      hospital_type: {
        id: 1,
        name: 'Type 1',
        created_at: '2021-08-18T14:10:19.929313+05:30'
      },
      hospitaldepatments_hospitals: ['D1'],
      hospitalfacilities_hospitals: ['F1'],
      hospitals_images: [],
      management_count: 0,
      officer_count: 0,
      doctor_count: 0,
      nurse_count: 0,
      hospital_name: 'Hospital 1',
      history: '',
      about: '',
      hospital_avatar: null,
      created_at: '2021-08-18T14:11:23.797403+05:30',
      management: [],
      officer: [],
      doctor: [],
      nurse: []
    })
  })
  useEffect(() => {
    // updateSearchQueries(
    //   queryString.parse(location.search))
    if (location.search) { setCurrentPage(queryString.parse(location.search).pageNo) }
  }, [location])

  const posts = postsData.results.map((post, index) => (
    <Post
      key={index}
      id={post.id}
      officer_count={post.officer_count}
      doctor_count={post.doctor_count}
      nurse_count={post.nurse_count}
      management_count={post.management_count}
      hospitals_images={post.hospitals_images}
      title={post.hospital_name}
      imgUrl={post.hospital_avatar}
      dept={post.hospitaldepatments_hospitals}
      fect={post.hospitalfacilities_hospitals}
      type={post.hospital_type}
      tags={post.tags}
      about={post.about}
      history={post.history}
      doctor={post.doctor}
      management={post.management}
      nurse={post.nurse}
      place={null}
      modalContent={null}
    />
  ))

  return (
    <>
      <Container
        px='1'
        ml='4'
        flexGrow={1}
        centerContent
        maxW='100%'
        h='100%'
        overflow='auto'
        bg='white'
      >
        {posts}
        <Paginator prefix={prefix} totalPages={postsData.count} currentPage={currentPage} />
      </Container>
    </>
  )
}

export default PostsArea
