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
      <section id="#home">
        <HomePage />
      </section>
      <section id="#about">
        <AboutMePage />
      </section>
      <section id="techstacks">
        <TechStacksPage />
      </section>
      <section id="skills">
        <SkillsPage />
      </section>
      <section id="#projects">
        <ProjectsPage />
      </section>
      <section>
        <StatisticsPage />
        <Github />
      </section>
      <ScrollToTop />
      <section id="#contact">
        <ContactMePage />
      </section>
    </div>
  );
}

export default App;
