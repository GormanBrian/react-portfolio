import { Link } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

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
          <Link key={path} to={path}>
            <Box
              as="a"
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={isActive ? activeLinkColor : linkColor}
              _hover={{
                textDecoration: "none",
                color: activeLinkColor,
              }}
              borderBottom={isActive ? "2px" : "0"}
            >
              {label}
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
