import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";

const ProjectsPage = () => {
  return (
    <Stack>
      <VStack>
        <Box mt="3rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="4xl"
            color="messenger.600"
          >
            Projects
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
            columns={{ base: 1, sm: 1, md: 1 }}
            textAlign="center"
            ml={[4, 14, 7]}
            mr="7rem"
            pt="3rem"
            spacing={5}
          >
            <Project1 />
            <Project2 />
            <Project3 />
            {/* <Box
              border="4px solid teal"
              borderRadius="2rem"
              w={[240, 650, 1140]}
              ml={[2, 1, 20]}
            >
              <HStack>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }}>
                  <Box
                    w={[240, 620, 640]}
                    ml={[2, 2, 4]}
                    mt={4}
                    // border="1px solid red"
                  >
                    <VStack>
                      <Box>
                        <video
                          src={require("../videos/Royal_Enfield.mp4")}
                          playsInline
                          autoPlay
                          muted
                          loop
                          w={[240, 600, 640]}
                          h={[100, 280, 330]}
                        />
                      </Box>

                      <Box
                        pt={2}
                        w={[240, 600, 640]}
                        h={140}
                        // border="1px solid red"
                      >
                        <Center>
                          <HStack>
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
                          </HStack>
                        </Center>
                      </Box>
                    </VStack>
                  </Box>

                  <Box
                    w={430}
                    h={340}
                    mt={4}
                    ml={[20, 15, 95]}
                    // border="1px solid red"
                  >
                    <VStack>
                      <Box>
                        <Heading>Royal Enfield Clone</Heading>
                      </Box>
                      <Box

                      // border="1px solid red"
                      >
                        <List
                          textAlign="left"
                          spacing="1.5rem"
                          fontSize="1.1rem"
                        >
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
                      <Box>
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
                          href={"#"}
                        >
                          Live
                        </Button>
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
                      </Box>
                    </VStack>
                  </Box>
                </SimpleGrid>
              </HStack>
            </Box> */}
          </SimpleGrid>
        </Center>
      </VStack>
    </Stack>
  );
};

export default ProjectsPage;
