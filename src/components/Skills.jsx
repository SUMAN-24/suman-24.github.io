import { Heading } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        Skills
      </Heading>
    </div>
  );
};

export default Skills;
