import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Css from "../techstacks/Css";
import Html from "../techstacks/Html";
import Javascript from "../techstacks/Javascript";
import { MdKeyboardArrowRight } from "react-icons/md";
import Git from "../techstacks/Git";

const Project1 = () => {
  return (
    <Stack border="4px solid teal" borderRadius="2rem" width="100%">
      <HStack>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
          <Box mt={4}>
            <VStack ml={{ sm: 2, md: 2, lg: 4 }} mr={{ sm: 2, md: 2, lg: 1 }}>
              <Box>
                <video
                  src={require("../videos/Royal_Enfield.mp4")}
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              </Box>

              <Box>
                <Center>
                  <SimpleGrid columns={{ base: 2, sm: 4, md: 4, lg: 4 }}>
                    <Link href="https://whatwg.org/">
                      <Html />
                      <Text
                        fontFamily=" body"
                        fontSize="md"
                        fontWeight="bold"
                        color="blackAlpha"
                      >
                        HTML 5
                      </Text>
                    </Link>

                    <Link href="https://www.w3.org/">
                      <Css />
                      <Text
                        fontFamily="body"
                        fontSize="md"
                        fontWeight="bold"
                        color="blackAlpha"
                      >
                        CSS 3
                      </Text>
                    </Link>

                    <Link href="https://www.javascript.com/">
                      <Javascript />
                      <Text
                        fontFamily="body"
                        fontSize="md"
                        fontWeight="bold"
                        color="blackAlpha"
                      >
                        JAVASCRIPT
                      </Text>
                    </Link>

                    <Link href="https://git-scm.com/">
                      <Git />
                      <Text
                        fontFamily="body"
                        fontSize="md"
                        fontWeight="bold"
                        color="blackAlpha"
                      >
                        GIT
                      </Text>
                    </Link>
                  </SimpleGrid>
                </Center>
              </Box>
            </VStack>
          </Box>

          <Box mt={4}>
            <VStack>
              <Box>
                <Heading>Royal Enfield Clone</Heading>
              </Box>
              <Box>
                <List textAlign="left" spacing="1.5rem" fontSize="1.1rem">
                  <ListItem
                    fontWeight="semibold"
                    color="rgba(16, 24, 52, 0.75)"
                  >
                    <ListIcon
                      as={MdKeyboardArrowRight}
                      width={30}
                      height={30}
                      color="teal.600"
                    />
                    Complete Responsiveness
                  </ListItem>
                  <ListItem
                    fontWeight="semibold"
                    color="rgba(16, 24, 52, 0.75)"
                  >
                    <ListIcon
                      as={MdKeyboardArrowRight}
                      width={30}
                      height={30}
                      color="teal.600"
                    />
                    Login & SignUp page
                  </ListItem>
                  <ListItem
                    fontWeight="semibold"
                    color="rgba(16, 24, 52, 0.75)"
                  >
                    <ListIcon
                      as={MdKeyboardArrowRight}
                      width={30}
                      height={30}
                      color="teal.600"
                    />
                    Products, Add to Cart, Payment option(with Sorting,
                    Filtering, Searching option)
                  </ListItem>
                  <ListItem
                    fontWeight="semibold"
                    color="rgba(16, 24, 52, 0.75)"
                  >
                    <ListIcon
                      as={MdKeyboardArrowRight}
                      width={30}
                      height={30}
                      color="teal.600"
                    />
                    Form Validation
                  </ListItem>
                </List>
              </Box>
              <Box display="flex">
                <a
                  href="https://royal-enfield-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="md"
                    height="45px"
                    width="100px"
                    border="2px"
                    backgroundColor="white"
                    borderColor="rgb(25, 108, 255)"
                    color="rgb(25, 108, 255)"
                    _hover={{
                      bgColor: "rgb(25, 108, 255)",
                      color: "white",
                    }}
                    fontFamily="sans-serif"
                    colorScheme={"messenger"}
                    variant="solid"
                    borderRadius={4}
                  >
                    Live
                  </Button>
                </a>

                <a
                  href="https://github.com/SUMAN-24/Royal-Enfield"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="md"
                    ml={2}
                    height="45px"
                    width="100px"
                    border="2px"
                    backgroundColor="white"
                    borderColor="rgb(25, 108, 255)"
                    color="rgb(25, 108, 255)"
                    _hover={{
                      bgColor: "rgb(25, 108, 255)",
                      color: "white",
                    }}
                    fontFamily="sans-serif"
                    colorScheme={"messenger"}
                    variant="solid"
                    borderRadius={4}
                    href={"#"}
                  >
                    Github
                  </Button>
                </a>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </HStack>
    </Stack>
  );
};

export default Project1;
