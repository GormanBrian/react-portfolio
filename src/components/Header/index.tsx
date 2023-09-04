import { useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import {
  useTextColor,
  useHeadingColor,
  useBackgroundColor,
  useBorderColor,
} from "../../helpers/colors";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import type { NavItem, NavProps } from "./types";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Me",
    path: "/about-me",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Resume",
    path: "/resume",
  },
];

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const activePath = useLocation().pathname;

  const backgroundColor = useBackgroundColor();
  const linkColor = useTextColor();
  const activeLinkColor = useHeadingColor();

  const navProps: NavProps = {
    items: NAV_ITEMS,
    activePath,
    linkColor,
    activeLinkColor,
  };

  return (
    <Box>
      <Flex
        bg={backgroundColor}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useBorderColor()}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontWeight={700}
            fontSize={"lg"}
            color={activeLinkColor}
          >
            Brian Gorman
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav {...navProps} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/** @TODO - Add Light/Dark mode toggle */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav {...navProps} backgroundColor={backgroundColor} />
      </Collapse>
    </Box>
  );
}
