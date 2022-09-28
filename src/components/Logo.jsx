import { Box, Image, Tooltip } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleLogoList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <Box
      //display={{ base: "start", sm: "start", md: "start" }}
      mt={2}
      //ml={12}
      width={12}
      height={12}
    >
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
        <a href="#home" onClick={() => toggleLogoList("#home")}>
          <Image
            //ml={5}
            src={require("../Images/SK portfolio.gif")}
            width={12}
            height={12}
          />
        </a>
      </Tooltip>
    </Box>
  );
};

export default Logo;
