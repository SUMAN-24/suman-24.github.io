import { Heading } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        Projects
      </Heading>
    </div>
  );
};

export default Projects;
