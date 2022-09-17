import "./App.css";
import AboutMePage from "./components/AboutMePage";
import HomePage from "./components/HomePage";
import WithSubnavigation from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";
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
    </div>
  );
}

export default App;
