import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SkillsPage = () => {
  return (
    <Stack width="100%" backgroundColor="rgb(236,237,239)">
      <VStack textAlign="center" width="100%">
        <Box mt="5rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="4xl"
            color="messenger.600"
          >
            Skills
          </Heading>
          <Divider
            width="5rem"
            fontWeight="bold"
            fontFamily="body"
            borderColor="blue"
            borderWidth="2px"
            ml="1.8rem"
          />
        </Box>
        <Center>
          <SimpleGrid
            fontFamily="body"
            fontSize="sm"
            color="rgb(16,24,52)"
            columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
            textAlign="center"
            ml="4rem"
            mr="4rem"
            pt={{ base: "4rem", sm: "3rem", md: "3rem" }}
            spacing={5}
          >
            <Box border="4px solid teal">
              <VStack>
                <Image
                  src={require("../gifs/Front End Development.gif")}
                  alt="Front End Development"
                />
                <Text fontSize="md" fontFamily="body">
                  Front End Development
                </Text>
              </VStack>
            </Box>

            <Box border="4px solid teal">
              <VStack>
                <Image
                  src={require("../gifs/Backend Development.gif")}
                  alt="Backend Development"
                />
                <Text fontSize="md" fontFamily="body">
                  Backend Development
                </Text>
              </VStack>
            </Box>

            <Box border="4px solid teal">
              <VStack>
                <Image
                  src={require("../gifs/Data Structures.gif")}
                  alt="Data Structures and Algorithm"
                />
                <Text fontSize="md" fontFamily="body">
                  Data Structures and Algorithm
                </Text>
              </VStack>
            </Box>

            <Box border="4px solid teal">
              <VStack>
                <Image
                  src={require("../gifs/Communication.gif")}
                  alt="Communication Skills"
                />
                <Text fontSize="md" fontFamily="body">
                  Communication
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Center>
      </VStack>
    </Stack>
  );
};

export default SkillsPage;
