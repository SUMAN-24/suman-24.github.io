import { Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        Home
      </Heading>
    </div>
  );
};

export default Home;
