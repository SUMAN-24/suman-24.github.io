import {
  Box,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  VStack,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Divider,
  HStack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, DownloadIcon } from "@chakra-ui/icons";

import Skills from "./Skills";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Home from "./Home";
import { useRef } from "react";
import Resume from "./Resume";
import React from "react";
import TechStacks from "./TechStacks";

export default function WithSubnavigation() {
  return (
    <Stack
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      w="100%"
    >
      <HStack>
        {/* <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            // py={{ base: 2 }}
            // px={{ base: 4 }}
            //borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
          > */}
        <Box
          //flex={{ base: 1 }}
          display={{ base: "flex", sm: "start", md: "start" }}
          mt={2}
          ml={10}
          width={12}
          height={12}
          //alignItems={useBreakpointValue({ base: "left", md: "left" })}
        >
          {/* <Box mt={2} ml={5}> */}
          <Image
            //textAlign={useBreakpointValue({ base: "left", md: "left" })}
            // color={useColorModeValue("gray.800", "white")}
            // ml={5}
            src={require("../Images/SK portfolio.gif")}
            width={12}
            height={12}
          />
          {/* </Box> */}
        </Box>
        <Box>
          <Box display={{ base: "none", md: "center" }} ml="25rem">
            <DesktopNav />
          </Box>
        </Box>

        <Box display={{ base: "none", sm: "none", md: "inline-flex" }}>
          <a
            href={
              "https://drive.google.com/file/d/19KpfKjphbpUxuXF44ul__PTkXaMzLwZW/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              colorScheme="messenger"
              variant="solid"
              borderRadius={4}
              _hover={{
                backgroundColor: "messenger.600",
              }}
              ml={300}
              mr={4}
            >
              Resume
              <span>
                <DownloadIcon w={5} h={5} color="yellow" />
              </span>
            </Button>
          </a>
        </Box>
        <Box ml={{ base: 40 }} display={{ base: "flex", md: "none" }}>
          <MobileNav />
        </Box>
        {/* </Flex> */}
      </HStack>
      <Divider />
    </Stack>
  );
}

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
    <HStack spacing={8}>
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

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} ml={600}>
      <Box display={{ base: "flex", md: "none" }}>
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
          size={{ base: "sm", sm: "md" }}
        >
          <DrawerOverlay size="full" />
          <DrawerContent
            style={{
              backgroundColor: "rgb(14,36,49)",
              marginTop: "60px",
            }}
            size="full"
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
                size="full"
              >
                <Box>
                  <Box>
                    <Home />
                  </Box>
                  <Box mt="1rem">
                    <AboutMe />
                  </Box>
                  <Box mt="1rem">
                    <Projects />
                  </Box>
                  <Box mt="1rem">
                    <Skills />
                  </Box>
                  <Box mt="1rem">
                    <Resume width="5rem" colorScheme="facebook" />
                  </Box>
                  <Box mt="1rem">
                    <ContactMe />
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
