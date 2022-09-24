import { Box } from "@chakra-ui/react";
import "./App.css";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import { Github } from "./components/Github";
import HomePage from "./pages/HomePage";
import WithSubnavigation from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import { ScrollToTop } from "./scroll/ScrollToTop";
import SkillsPage from "./pages/SkillsPage";
import StatisticsPage from "./pages/StatisticsPage";
import TechStacksPage from "./pages/TechStacksPage";

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
