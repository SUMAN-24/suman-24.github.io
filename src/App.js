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
      <HomePage />
      <AboutMePage />
      <TechStacksPage />
      <SkillsPage />
      <ProjectsPage />
      <StatisticsPage />
      <Github />
      <ScrollToTop />
      <ContactMePage />
    </div>
  );
}

export default App;
