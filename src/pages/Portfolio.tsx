import { Box, SimpleGrid } from "@chakra-ui/react";
import PortfolioCard, { PortfolioCardProps } from "../components/PortfolioCard";

const portfolioCardData: Array<PortfolioCardProps> = [
  {
    title: "AFK",
    technology: "HTML / CSS / JS",
    image: "https://picsum.photos/200/300",
    repositoryLink: "https://github.com/Jlausier/AFK-Coop",
    deployedLink: "https://jlausier.github.io/AFK-Coop/",
  },
  {
    title: "",
    technology: "",
    image: "https://picsum.photos/200/300",
    repositoryLink: "",
    deployedLink: "",
  },
  {
    title: "",
    technology: "",
    image: "https://picsum.photos/200/300",
    repositoryLink: "",
    deployedLink: "",
  },
  {
    title: "",
    technology: "",
    image: "https://picsum.photos/200/300",
    repositoryLink: "",
    deployedLink: "",
  },
  {
    title: "",
    technology: "",
    image: "https://picsum.photos/200/300",
    repositoryLink: "",
    deployedLink: "",
  },
  {
    title: "Horiseon",
    technology: "HTML / CSS",
    image: "https://picsum.photos/200/300",
    repositoryLink: "https://gormanbrian.github.io/horiseon-website/",
    deployedLink: "https://github.com/GormanBrian/horiseon-website",
  },
];

export default function Portfolio() {
  return (
    <Box p={"6"}>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {portfolioCardData.map((data) => (
          <PortfolioCard key={data.title} {...data} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
