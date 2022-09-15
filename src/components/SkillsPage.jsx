import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Bootstrap from "./techstacks/Bootstrap";
import Chakra from "./techstacks/Chakra";
import Css from "./techstacks/Css";
import Git from "./techstacks/Git";
import Html from "./techstacks/Html";
import Javascript from "./techstacks/Javascript";
import MaterialUi from "./techstacks/MaterialUi";
import MongoDb from "./techstacks/MongoDb";
import NodejsA from "./techstacks/NodejsA";
import Npm from "./techstacks/Npm";
import Reacts from "./techstacks/Reacts";
import ReduxA from "./techstacks/ReduxA";

const SkillsPage = () => {
  return (
    <Stack width={{ base: "100%", sm: "100%", md: "100%" }}>
      <VStack
        backgroundColor="rgb(236,237,239)"
        textAlign="center"
        width={{ base: "100%", sm: "100%", md: "100%" }}
      >
        <Box mt="3rem">
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
            columns={{ base: 1, sm: 2, md: 4 }}
            textAlign="center"
            ml="4rem"
            mr="4rem"
            pt="3rem"
            spacing={5}
          >
            <Box border="4px solid teal">
              <VStack>
                <Image
                  src={require("../Images/Front End Development.gif")}
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
                  src={require("../Images/Backend Development.gif")}
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
                  src={require("../Images/Data Structures.gif")}
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
                  src={require("../Images/Communication.gif")}
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
