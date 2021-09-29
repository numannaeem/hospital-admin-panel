import { useState } from 'react'
import Post from './Post'
import { Container } from '@chakra-ui/layout'
import Paginator from './Paginator'

const PostsArea = ({ apiEndpoint }) => {
  const [postsData, setPostsData] = useState({
    count: 1,
    next: null,
    previous: null,
    results: Array(10).fill({

      id: 1,
      hospital_type: {
        id: 1,
        name: 'Type 1',
        created_at: '2021-08-18T14:10:19.929313+05:30'
      },
      hospitaldepatments_hospitals: [
        'D1'
      ],
      hospitalfacilities_hospitals: [
        'F1'
      ],
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
  const posts = postsData.results.map((post, index) =>
    <Post
      key={index} id={post.id} title={post.hospital_name}
      imgUrl={post.hospital_avatar} dept={post.hospitaldepatments_hospitals} fect={post.hospitalfacilities_hospitals}
      type={post.hospital_type} tags={post.tags} place={null}
      modalContent={null}
    />)

  return (
    <>
      <Container centerContent h='90vh' bg='white'>
        {posts}
        <Paginator totalPages={postsData.count} currentPage={postsData.next - 1} />
      </Container>
    </>
  )
}

export default PostsArea