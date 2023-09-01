import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import type { NavProps } from "./types";

export default function DesktopNav({ items, activePath }: NavProps) {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {items.map(({ path, label }) => {
        const isActive = path === activePath;
        return (
          <Box key={label}>
            <Box
              as="a"
              p={2}
              href={path}
              fontSize={"sm"}
              fontWeight={isActive ? 700 : 500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {label}
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}
