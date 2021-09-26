import React from "react";
import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function NavItem({ icon, title, active, navSize }) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Link
        as={NavLink}
        to={`/${title.toLowerCase()}`}
        backgroundColor={active && "#AEC8CA"}
        p={3}
        borderRadius={8}
        _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
        w={navSize === "large" && "100%"}
      >
        <Flex>
          <Icon as={icon} fontSize="xl" color={active ? "telegram.900" : "gray.500"} />
          <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
            {title}
          </Text>
        </Flex>
      </Link>
      {/* <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList> */}
    </Flex>
  );
}
