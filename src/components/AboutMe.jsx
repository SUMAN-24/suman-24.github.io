import { Heading } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        About
      </Heading>
    </div>
  );
};

export default AboutMe;
