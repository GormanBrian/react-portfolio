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
    title: "WalletWizard",
    technology: "Handlebars / Tailwind / Sequelize",
    image: "/walletwizard_screenshot.png",
    repositoryLink: "https://github.com/Jlausier/WalletWizzard",
    deployedLink: "https://still-spire-90353-025f487cfe63.herokuapp.com/",
  },
  {
    title: "Tech Blog",
    technology: "Handlebars / CSS / MySQL",
    image: "/techblog_screenshot.png",
    repositoryLink: "https://github.com/GormanBrian/tech-blog",
    deployedLink: "https://damp-sierra-09811-a1409c86adda.herokuapp.com/",
  },
  {
    title: "Note Taker",
    technology: "HTML / Express",
    image: "/notetaker_screenshot.png",
    repositoryLink: "https://github.com/GormanBrian/note-taker",
    deployedLink:
      "https://fathomless-fortress-32530-2e018f53104e.herokuapp.com/",
  },
  {
    title: "Workday Scheduler",
    technology: "HTML / jQuery",
    image: "/workdayscheduler_screenshot.png",
    repositoryLink: "https://github.com/GormanBrian/work-day-scheduler",
    deployedLink: "https://gormanbrian.github.io/work-day-scheduler/",
  },
  {
    title: "Horiseon",
    technology: "HTML / CSS",
    image: "/horiseon_screenshot.png",
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
