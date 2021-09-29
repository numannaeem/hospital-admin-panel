import React from 'react'
import { Flex, TagLabel, Icon, Link, Tag } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ icon, title, active, navSize }) {
  return (
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems='center'
    >
      <Link
        as={NavLink}
        to={`/${title.toLowerCase()}`}
        backgroundColor={active && '#AEC8CA'}
        p={3}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
        w={navSize === 'large' && '100%'}
      >
        <Tag bg='transparent'>
          <Icon as={icon} fontSize='xl' color={active ? 'telegram.900' : 'gray.500'} />
          <TagLabel ml={5} display={navSize === 'small' ? 'none' : 'flex'}>
            {title}
          </TagLabel>
        </Tag>
      </Link>
    </Flex>
  )
}
