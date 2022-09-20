import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Type from "./Type";

const HomePage = () => {
  return (
    <Stack>
      <VStack>
        <Box mt="3.6rem">
          <Heading
            fontFamily="sans-serif"
            fontSize="5xl"
            fontWeight="semibold"
            color="rgb(16,24,52)"
          >
            <Text>"Hi👋,</Text>
            <Text>
              I am{" "}
              <Tooltip
                width="12rem"
                height="2rem"
                hasArrow
                placement="right"
                label="Full Stack Web Developer"
                bg="messenger.600"
                color="white"
                textAlign="match-parent"
                pt="0.3rem"
                pl="0.7rem"
              >
                <Button fontSize="2xl" colorScheme="facebook" color="orange">
                  Suman Kumar Khan
                </Button>
              </Tooltip>
            </Text>
            <Text color="messenger.600">MERN Developer</Text>
          </Heading>
        </Box>

        <Box pt="5rem" display="flex" mt="7rem" gap={35} w={950}>
          <Box ml="5rem" width={450}>
            <Image
              width={400}
              height={400}
              borderRadius="8%"
              border="2px solid teal"
              src={require("../Images/SK theme.jpg")}
              alt="Suman"
            />
          </Box>
          <Box pr="5rem" pt="4rem" width={810}>
            <Heading
              as="h2"
              fontFamily="sans-serif"
              fontSize="3xl"
              fontWeight="semibold"
              color="rgb(16,24,52)"
              noOfLines={[4, 4, 4]}
            >
              <Text>⌛ 1200+,</Text>
              <Text> Hours of coding </Text>
              <Text>Made me</Text>
              <Text bgClip="text" bgGradient="linear(to-l,#7928CA, #FF0080)">
                <Type />
              </Text>
            </Heading>
            <br />
            <br />
            <a
              href={
                "https://drive.google.com/file/d/19KpfKjphbpUxuXF44ul__PTkXaMzLwZW/view?usp=sharing"
              }
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="md"
                height="45px"
                width="200px"
                border="2px"
                backgroundColor="white"
                borderColor="rgb(25, 108, 255)"
                color="rgb(25, 108, 255)"
                _hover={{ bgColor: "rgb(25, 108, 255)", color: "white" }}
                fontFamily="sans-serif"
              >
                Resume
              </Button>
            </a>
          </Box>
        </Box>
      </VStack>
    </Stack>
  );
};

export default HomePage;
