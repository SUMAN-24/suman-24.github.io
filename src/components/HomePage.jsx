import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

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
              <Button fontSize="2xl" colorScheme="facebook" color="orange">
                Suman Kumar Khan
              </Button>
            </Text>
            <Text color="messenger.600">MERN Developer</Text>
          </Heading>
        </Box>

        <Box pt="5rem" display="flex" mt="7rem" gap="6rem">
          <Box ml="5rem" width="30%">
            <Image
              width="100%"
              height="100%"
              borderRadius="8%"
              border="2px solid teal"
              src={require("../Images/SK theme.jpg")}
              alt="Suman"
            />
          </Box>
          <Box pr="5rem" pt="4rem">
            <Heading
              as="h2"
              fontFamily="sans-serif"
              fontSize="3xl"
              fontWeight="semibold"
              color="rgb(16,24,52)"
              //noOfLines={[4, 5, 6]}
            >
              <Text>⌛ 1200+,</Text>
              <Text> Hours of coding </Text>
              <Text>Made me MERN Developer</Text>
            </Heading>
            <br />
            <br />
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
          </Box>
        </Box>
      </VStack>
    </Stack>
  );
};

export default HomePage;
