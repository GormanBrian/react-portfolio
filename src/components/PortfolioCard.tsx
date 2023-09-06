import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  ButtonGroup,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export interface PortfolioCardProps {
  title: string;
  technology: string;
  image: string;
  repositoryLink: string;
  deployedLink: string;
}

export default function PortfolioCard({
  title,
  technology,
  image,
  repositoryLink,
  deployedLink,
}: PortfolioCardProps) {
  return (
    <Center py={6}>
      <Card
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <CardHeader
          h={"315px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            h="100%"
            w="100%"
            src={image}
            objectFit="cover"
            alt="Example"
          />
        </CardHeader>
        <CardBody>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {technology}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link href={repositoryLink} isExternal>
              <Button variant="solid" colorScheme="blue">
                Live Site
              </Button>
            </Link>
            <Link href={deployedLink} isExternal>
              <Button variant="ghost" colorScheme="blue">
                Repository
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Center>
  );
}
