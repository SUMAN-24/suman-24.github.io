import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Resume = ({ ml, width, height, colorScheme }) => {
  return (
    <Box ml={ml}>
      <Button
        width={width}
        height={height}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        colorScheme={colorScheme}
        variant="solid"
        borderRadius={4}
        href={"#"}
        _hover={{
          bg: "messenger.500",
        }}
      >
        Resume
        <span>
          <DownloadIcon w={5} h={5} color="yellow" />
        </span>
      </Button>
    </Box>
  );
};

export default Resume;
