import { Heading } from "@chakra-ui/react";
import React from "react";

const ContactMe = () => {
  return (
    <div>
      <Heading
        fontSize="md"
        color="gray.30"
        cursor="pointer"
        _hover={{ bg: "none", color: "blue" }}
      >
        ContactMe
      </Heading>
    </div>
  );
};

export default ContactMe;
