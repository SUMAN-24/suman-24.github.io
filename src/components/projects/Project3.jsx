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
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Css from "../../techstacks/Css";
import Html from "../../techstacks/Html";
import Javascript from "../../techstacks/Javascript";
import { MdKeyboardArrowRight } from "react-icons/md";
import Git from "../../techstacks/Git";
import Bootstrap from "../../techstacks/Bootstrap";

const Project3 = () => {
  return (
    <Box
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
                  src={require("../../videos/Tata_CLiQ.mp4")}
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

                    <Link href="https://getbootstrap.com/">
                      <Bootstrap />
                      <Text
                        fontFamily="body"
                        fontSize="md"
                        fontWeight="bold"
                        color="blackAlpha"
                      >
                        BOOTSTRAP
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
                <Heading>Tata-CLiQ Clone</Heading>
              </Box>
              <Box

              // border="1px solid red"
              >
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
                    Products, Carousel Banner, Add to Cart, Payment option(with
                    sorting, filtering, searching option)
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
                <a
                  href="https://clone-tatacliq.netlify.app/"
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
                    href={"#"}
                  >
                    Live
                  </Button>
                </a>

                <a
                  href="https://github.com/SUMAN-24/Tata-Cliq"
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
    </Box>
  );
};

export default Project3;
