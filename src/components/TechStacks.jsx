import { Heading } from "@chakra-ui/react";
import React from "react";

const TechStacks = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        TechStacks
      </Heading>
    </div>
  );
};

export default TechStacks;
