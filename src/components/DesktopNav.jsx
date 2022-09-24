import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import TechStacks from "./TechStacks";

const DesktopNav = () => {
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <HStack width={{ base: "100%", sm: "100%", md: "100%" }} spacing={8}>
      <Box>
        <a href="#home" onClick={() => toggleNavList("#home")}>
          <Home />
        </a>
      </Box>
      <Box>
        <a href="#about" onClick={() => toggleNavList("#about")}>
          <AboutMe />
        </a>
      </Box>
      <Box>
        <a href="#projects" onClick={() => toggleNavList("#projects")}>
          <Projects />
        </a>
      </Box>
      <Box>
        <a href="#techstacks" onClick={() => toggleNavList("#skills")}>
          <TechStacks />
        </a>
      </Box>
      <Box>
        <a href="#skills" onClick={() => toggleNavList("#skills")}>
          <Skills />
        </a>
      </Box>
      <Box>
        <a href="#contact" onClick={() => toggleNavList("#contact")}>
          <ContactMe />
        </a>
      </Box>
    </HStack>
  );
};

export default DesktopNav;
