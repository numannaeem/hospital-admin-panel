import React, { useState } from "react";
import { Flex, Text, IconButton, Divider, Avatar, Heading } from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "../components/NavItem";
import { useLocation } from "react-router";

export default function Sidebar() {
  const location = useLocation();
  const isActive = (routeName) => routeName === location.pathname;
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      my="2.5vh"
      backgroundColor="telegram.50"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
          active={isActive("/dashboard")}
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Calendar"
          active={isActive("/calendar")}
        />
        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="Clients"
          active={isActive("/clients")}
        />
        <NavItem
          navSize={navSize}
          icon={IoPawOutline}
          title="Animals"
          active={isActive("/animals")}
        />
        <NavItem
          navSize={navSize}
          icon={FiDollarSign}
          title="Stocks"
          active={isActive("/stocks")}
        />
        <NavItem
          navSize={navSize}
          icon={FiBriefcase}
          title="Reports"
          active={isActive("/reports")}
        />
        <NavItem
          navSize={navSize}
          icon={FiSettings}
          title="Settings"
          active={isActive("/settings")}
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}