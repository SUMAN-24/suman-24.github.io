import {
  Box,
  Divider,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Bootstrap from "../techstacks/Bootstrap";
import Chakra from "../techstacks/Chakra";
import Css from "../techstacks/Css";
import Git from "../techstacks/Git";
import Html from "../techstacks/Html";
import Javascript from "../techstacks/Javascript";
import MaterialUi from "../techstacks/MaterialUi";
import MongoDb from "../techstacks/MongoDb";
import NodejsA from "../techstacks/NodejsA";
import Npm from "../techstacks/Npm";
import Reacts from "../techstacks/Reacts";
import ReduxA from "../techstacks/ReduxA";

const TechStacksPage = () => {
  return (
    <Stack width={{ base: "100%", sm: "100%", md: "100%" }}>
      <VStack
        backgroundColor="rgb(16,16,26)"
        textAlign="center"
        height={{ base: "60rem", sm: "55rem", md: "45rem" }}
      >
        <Box mt="3rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="4xl"
            color="messenger.600"
          >
            Tech Stacks
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

        <SimpleGrid
          fontFamily="body"
          fontSize="sm"
          color="rgb(16,24,52)"
          columns={{ base: 3, sm: 3, md: 4 }}
          textAlign="center"
          ml="4rem"
          pt="10rem"
          gap="10rem"
        >
          <VStack mt="-6rem">
            <Link href="https://whatwg.org/">
              <Html />
              <Text
                fontFamily=" body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                HTML 5
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://www.w3.org/">
              <Css />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                CSS 3
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://www.javascript.com/">
              <Javascript />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                JAVASCRIPT
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://reactjs.org/">
              <Reacts />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                REACT
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://redux.js.org/">
              <ReduxA />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                REDUX
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://nodejs.org/en/">
              <NodejsA />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                NODE JS
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://www.mongodb.com/">
              <MongoDb />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                MONGODB
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://mui.com/">
              <MaterialUi />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                MATERIAL UI
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://git-scm.com/">
              <Git />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                GIT
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://www.npmjs.com/">
              <Npm />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                NPM
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://getbootstrap.com/">
              <Bootstrap />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                BOOTSTRAP
              </Text>
            </Link>
          </VStack>

          <VStack mt="-6rem">
            <Link href="https://chakra-ui.com/">
              <Chakra />
              <Text
                fontFamily="body"
                fontSize="md"
                fontWeight="bold"
                color="white"
              >
                CHAKRA UI
              </Text>
            </Link>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Stack>
  );
};

export default TechStacksPage;
