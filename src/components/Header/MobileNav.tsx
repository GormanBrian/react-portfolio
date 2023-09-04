import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Box, Stack, Text } from "@chakra-ui/react";

import type { NavProps } from "./types";

interface MobileNavProps extends NavProps {
  backgroundColor: string;
}

export default function MobileNav({
  items,
  activePath,
  linkColor,
  activeLinkColor,
  backgroundColor,
}: MobileNavProps) {
  return (
    <Stack bg={backgroundColor} p={4} display={{ md: "none" }}>
      {items.map(({ path, label }) => {
        const isActive = path === activePath;
        return (
          <Box key={path}>
            <ChakraLink
              as={ReactRouterLink}
              to={path}
              py={2}
              justifyContent="space-between"
              alignItems="center"
              _hover={{
                textDecoration: "none",
                color: activeLinkColor,
              }}
            >
              <Text fontWeight={isActive ? 800 : 600} color={linkColor}>
                {label}
              </Text>
            </ChakraLink>
          </Box>
        );
      })}
    </Stack>
  );
}
