import { Link } from "react-router-dom";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import type { NavProps } from "./types";

export default function MobileNav({ items, activePath }: NavProps) {
  const color = useColorModeValue("gray.600", "gray.200");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {items.map(({ path, label }) => {
        const isActive = path === activePath;
        return (
          <Link key={path} to={path}>
            <Box
              py={2}
              justifyContent="space-between"
              alignItems="center"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text fontWeight={isActive ? 800 : 600} color={color}>
                {label}
              </Text>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
