import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Box, Stack } from "@chakra-ui/react";

import type { NavProps } from "./types";

export default function DesktopNav({
  items,
  activePath,
  linkColor,
  activeLinkColor,
}: NavProps) {
  return (
    <Stack direction={"row"} spacing={4}>
      {items.map(({ path, label }) => {
        const isActive = path === activePath;
        return (
          <Box key={path}>
            <ChakraLink
              as={ReactRouterLink}
              to={path}
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={isActive ? activeLinkColor : linkColor}
              _hover={{
                textDecoration: "none",
                color: activeLinkColor,
              }}
              borderBottom={isActive ? "2px" : "0"}
              borderColor={activeLinkColor}
            >
              {label}
            </ChakraLink>
          </Box>
        );
      })}
    </Stack>
  );
}
