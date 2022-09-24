import {
  Box,
  Button,
  Stack,
  Divider,
  HStack,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function WithSubnavigation() {
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
        position: "sticky",
        top: 0,
        backgroundColor: "rgb(255,255,255)",
        zIndex: 1,
      }}
      // overflow="hidden"
    >
      <HStack width={{ base: "100%", sm: "100%", md: "100%" }}>
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
          <Tooltip
            width="5rem"
            height="2.4rem"
            hasArrow
            placement="right-end"
            label="Portfolio"
            bg="messenger.600"
            color="whiteAlpha.900"
            textAlign="match-parent"
            pt="0.5rem"
            pl="0.7rem"
          >
            <a href="#home" onClick={() => toggleNavList("#home")}>
              <Image
                //textAlign={useBreakpointValue({ base: "left", md: "left" })}
                // color={useColorModeValue("gray.800", "white")}
                ml={5}
                src={require("../Images/SK portfolio.gif")}
                width={12}
                height={12}
              />
            </a>
          </Tooltip>
          {/* </Box> */}
        </Box>
        <Box>
          <Box
            width={{ base: "100%", sm: "100%", md: "100%" }}
            display={{ base: "none", sm: "none", md: "center" }}
            ml={380}
          >
            <DesktopNav />
          </Box>
        </Box>

        <Box display={{ base: "none", sm: "none", md: "inline-flex" }}>
          <a href={require("../pdf/Suman_Khan_Resume.pdf")} download>
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
              ml={250}
              mr={4}
            >
              Resume
              <span>
                <DownloadIcon w={5} h={5} color="yellow" />
              </span>
            </Button>
          </a>
        </Box>
        <Box
          // ml={{ base: 20, sm: 40 }}
          display={{ base: "flex", sm: "flex", md: "none" }}
          width={{ base: "100%", sm: "100%", md: "100%" }}
        >
          <MobileNav />
        </Box>
        {/* </Flex> */}
      </HStack>
      <Divider />
    </Stack>
  );
}
