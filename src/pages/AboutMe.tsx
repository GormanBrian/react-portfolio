import { Link as ReactRouterLink } from "react-router-dom";
import {
  Button,
  Link as ChakraLink,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Brian Gorman,
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              React Developer
            </Text>{" "}
          </Heading>
          <Stack gap={"6"}>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              As a dedicated student specializing in web development, I have
              immersed myself in the world of React and TypeScript. My academic
              pursuits have equipped me with a solid foundation in building
              efficient and scalable web applications, even as I continue to
              refine and expand my skill set.
            </Text>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Driven by a commitment to excellence, I prioritize best practices,
              maintainable code, and innovative solutions. While I am in the
              early stages of my career, I approach each project with meticulous
              attention to detail and a thirst for knowledge.
            </Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <ChakraLink as={ReactRouterLink} to={"/contact"}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Contact Me
              </Button>
            </ChakraLink>

            <ChakraLink as={ReactRouterLink} to={"/portfolio"}>
              <Button rounded={"full"}>See My Work</Button>
            </ChakraLink>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
