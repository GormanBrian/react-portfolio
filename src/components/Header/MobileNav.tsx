import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import type { NavProps } from "./types";

export default function MobileNav({ items }: NavProps) {
  const color = useColorModeValue("gray.600", "gray.200");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {items.map(({ path, label }) => (
        <Stack key={label} spacing={4}>
          <Box
            py={2}
            as="a"
            href={path}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} color={color}>
              {label}
            </Text>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
