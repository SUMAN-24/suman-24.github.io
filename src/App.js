import { Box } from "@chakra-ui/react";
import "./App.css";
import AboutMePage from "./components/AboutMePage";
import ContactMePage from "./components/ContactMePage";
import { Github } from "./components/Github";
import HomePage from "./components/HomePage";
import WithSubnavigation from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import SkillsPage from "./components/SkillsPage";
import StatisticsPage from "./components/StatisticsPage";
import TechStacksPage from "./components/TechStacksPage";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <Box id="#home">
        <HomePage />
      </Box>
      <Box id="#about">
        <AboutMePage />
      </Box>
      <Box id="techstacks">
        <TechStacksPage />
      </Box>
      <Box id="skills">
        <SkillsPage />
      </Box>
      <Box id="#projects">
        <ProjectsPage />
      </Box>
      <Box>
        <StatisticsPage />
        <Github />
      </Box>
      <ScrollToTop />
      <Box id="#contact">
        <ContactMePage />
      </Box>
    </div>
  );
}

export default App;
