import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const StatisticsPage = () => {
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
            Statistics
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

        <HStack>
          <Box
            border="4px solid teal"
            borderRadius="2rem"
            w={[240, 650, 1140]}
            ml={[2, 1, 30]}
            pt="4rem"
            backgroundColor="rgb(16,16,26)"
            textAlign="center"
          >
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
              <Box>
                <VStack>
                  <Box
                    w={200}
                    h={200}
                    border="6px solid blue"
                    borderRadius={"50%"}
                  >
                    <Center>
                      <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        bgClip="text"
                        bgGradient="linear(to-l,#7928CA, #FF0080)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        mt={14}
                      >
                        1200+
                      </Text>
                    </Center>
                  </Box>
                  <Box>
                    <Text
                      fontSize={30}
                      fontWeight="bold"
                      color="messenger.600"
                      _hover={{
                        bgClip: "text",
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      Hours
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={20} fontWeight="bold" color="GrayText">
                      of Full Stack Coding
                    </Text>
                  </Box>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Box
                    w={200}
                    h={200}
                    border="6px solid green"
                    borderRadius={"50%"}
                  >
                    <Center>
                      <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        bgClip="text"
                        bgGradient="linear(to-l,#7928CA, #FF0080)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        mt={14}
                      >
                        276+
                      </Text>
                    </Center>
                  </Box>

                  <Box>
                    <Text
                      fontSize={30}
                      fontWeight="bold"
                      color="whatsapp.600"
                      _hover={{
                        bgClip: "text",
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      Git
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize={20} fontWeight="bold" color="GrayText">
                      Commits
                    </Text>
                  </Box>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Box
                    w={200}
                    h={200}
                    border="6px solid blue"
                    borderRadius={"50%"}
                  >
                    <Center>
                      <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        bgClip="text"
                        bgGradient="linear(to-l,#7928CA, #FF0080)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        mt={14}
                      >
                        20+
                      </Text>
                    </Center>
                  </Box>

                  <Box>
                    <Text
                      fontSize={30}
                      fontWeight="bold"
                      color="messenger.600"
                      _hover={{
                        bgClip: "text",
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      Projects
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize={20} fontWeight="bold" color="GrayText">
                      Done
                    </Text>
                  </Box>
                </VStack>
              </Box>

              <Box>
                <VStack>
                  <Box
                    w={200}
                    h={200}
                    border="6px solid green"
                    borderRadius={"50%"}
                  >
                    <Center>
                      <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        bgClip="text"
                        bgGradient="linear(to-l,#7928CA, #FF0080)"
                        _hover={{
                          bgGradient: "linear(to-r, red.500, yellow.500)",
                        }}
                        mt={14}
                      >
                        100+
                      </Text>
                    </Center>
                  </Box>

                  <Box>
                    <Text
                      fontSize={30}
                      fontWeight="bold"
                      color="whatsapp.600"
                      _hover={{
                        bgClip: "text",
                        bgGradient: "linear(to-r, red.500, yellow.500)",
                      }}
                    >
                      Hours
                    </Text>
                  </Box>

                  <Box>
                    <Text fontSize={20} fontWeight="bold" color="GrayText">
                      of Soft Skills Sessions
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StatisticsPage;
