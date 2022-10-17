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
import Type from "../components/Type";

const HomePage = () => {
  return (
    <Stack width="100%" height={[1250, 790, 780]}>
      <VStack width="100%" background="fixed">
        <Box mt="5rem">
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
                placement="auto"
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

        <Box w={{ sm: "95%", md: "85%", lg: "80%", xl: "80%" }} pt="5rem">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }}>
            <Box mt={[-20, -20, -14, -14]}>
              <Image
                width={[300, 300, 300, 300]}
                height={[450, 450, 450, 450]}
                borderRadius="8%"
                border="2px solid teal"
                src={require("../Images/SK theme.jpg")}
                alt="Suman"
              />
            </Box>
            <Box pt="4rem">
              <Heading
                as="h2"
                fontFamily="sans-serif"
                fontSize="3xl"
                fontWeight="semibold"
                color="rgb(16,24,52)"
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
