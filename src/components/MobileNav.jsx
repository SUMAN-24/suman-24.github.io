import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import TechStacks from "./TechStacks";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  return (
    <Stack
      width={{ base: "100%", sm: "100%", md: "100%" }}
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      ml={600}
    >
      <Box>
        <IconButton
          aria-label="hamburger"
          icon={<HamburgerIcon />}
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          variant={"ghost"}
          w={3}
          h={3}
          fontSize={25}
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={{ base: "sm", sm: "md", md: "none" }}
        >
          <DrawerOverlay />
          <DrawerContent
            style={{
              backgroundColor: "rgb(14,36,49)",
              marginTop: "63px",
            }}
            maxHeight="-moz-fit-content"
          >
            <DrawerCloseButton color="white" />

            <DrawerBody>
              <VStack
                style={{
                  width: "100px",
                  height: "160px",
                  marginTop: "10px",
                  color: "white",
                }}
              >
                <Box>
                  <Box pb="1rem">
                    <a href="#home" onClick={() => toggleNavList("#home")}>
                      <Home />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a href="#about" onClick={() => toggleNavList("#about")}>
                      <AboutMe />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a
                      href="#projects"
                      onClick={() => toggleNavList("#projects")}
                    >
                      <Projects />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a
                      href="#techstacks"
                      onClick={() => toggleNavList("#skills")}
                    >
                      <TechStacks />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a href="#skills" onClick={() => toggleNavList("#skills")}>
                      <Skills />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a
                      href={
                        "https://drive.google.com/file/d/19KpfKjphbpUxuXF44ul__PTkXaMzLwZW/view?usp=sharing"
                      }
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      <Resume width="5rem" colorScheme="facebook" />
                    </a>
                  </Box>
                  <Box mt="1rem" pb="1rem">
                    <a
                      href="#contact"
                      onClick={() => toggleNavList("#contact")}
                    >
                      <ContactMe />
                    </a>
                  </Box>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Stack>
  );
};

export default MobileNav;
