import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

import Logo from "./Logo";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2023 Brian Gorman. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/brian-gorman-092871289/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"GitHub"}
            href={"https://github.com/GormanBrian"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Youtube"} href={"https://youtube.com/"}>
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
