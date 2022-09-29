import { Box, Divider, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AboutMePage = () => {
  return (
    <Stack
      width={[972, 974, 1348]}
      height={[730, 720, 500]}
      mt="-0.5rem"
      //border="1px solid red"
      backgroundColor="rgb(236,237,239)"
    >
      <VStack>
        <Box mt="5rem">
          <Heading
            fontWeight="semibold"
            fontFamily="body"
            fontSize="4xl"
            color="messenger.600"
          >
            About Me
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
        <Box pt="2rem" display="flex" mt="7rem">
          <Box pr="6rem" pt="-4rem" noOfLines={[28, 60, 15]}>
            <Heading
              fontFamily="sans-serif"
              fontSize="lg"
              fontWeight="bold"
              color="rgb(16,24,52)"
              textAlign="center"
              ml="4rem"
            >
              <Text>
                Hello!👋, my name is Suman Kumar Khan and I am an Aspiring Full
                Stack Web Developer{" "}
              </Text>
              <Text>with a passion for building and designing websites.</Text>
              <br />
              <Text>
                {" "}
                I made some cloning of excellent websites as Project Work at
                Masai School,{" "}
              </Text>
              <Text>
                implementing Project Management Skills and Collaborative Work
              </Text>
              <Text>
                and various Mini projects as assignments given at Masai.
              </Text>{" "}
              <br />
              <Text>Doing 1200+ hours of coding is what I am Today.</Text>
              <br />
              <Text>
                {" "}
                Looking forward to joining an organization that provides
                opportunities to{" "}
              </Text>
              <Text>
                enhance my skills while working on exciting projects
              </Text>{" "}
              <Text>
                thus creating a mark for myself as a Software Engineer.
              </Text>
            </Heading>
            <br />
            <Text>Mail me at: khansuman240694@gmail.com</Text>
          </Box>
        </Box>
      </VStack>
    </Stack>
  );
};

export default AboutMePage;
