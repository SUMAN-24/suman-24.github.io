import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
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

        <Box
          w={[300, 600, 1000]}
          pt="5rem"
          // border="1px solid red"
          ml={[70, 30, 30]}
        >
          <SimpleGrid columns={[1, 1, 2]}>
            <Box ml={[0, 125, 15]}>
              <Image
                // width={300}
                // height={400}
                borderRadius="8%"
                border="2px solid teal"
                src={require("../Images/SK theme.jpg")}
                alt="Suman"
              />
            </Box>
            <Box pr="5rem" pt="4rem" ml="2rem">
              <Heading
                as="h2"
                fontFamily="sans-serif"
                fontSize="3xl"
                fontWeight="semibold"
                color="rgb(16,24,52)"
                noOfLines={[12, 4, 4]}
              >
                <Text>⌛ 1200+,</Text>
                <Text> Hours of coding </Text>
                <Text>Made me</Text>

                <Type />
              </Heading>

              <br />
              <br />
              <a href={require("../pdf/Suman_Khan_Resume.pdf")} download>
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
          </SimpleGrid>
        </Box>
      </VStack>
    </Stack>
  );
};

export default HomePage;
