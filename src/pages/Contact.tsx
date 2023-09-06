import { Stack, Heading } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Stack
      textAlign={"center"}
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Contact Me
      </Heading>
      <ContactForm />
    </Stack>
  );
}
