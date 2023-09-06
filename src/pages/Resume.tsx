import { ReactElement } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  SimpleGrid,
  Link as ChakraLink,
  Icon,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Resume() {
  return (
    <Box p={"6"}>
      <ChakraLink
        as={ReactRouterLink}
        to={
          "https://docs.google.com/document/d/1_7ZPX7RNPuuLz1G5BgbSFVK5wH5mIRwCiXq3J1BNF38/edit?usp=sharing"
        }
        isExternal
      >
        <Button
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Download My Resume
        </Button>
      </ChakraLink>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title="Typescript"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title="React"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title="Express"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title="MongoDB"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title="NodeJS"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title="MySQL"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </SimpleGrid>
    </Box>
  );
}
