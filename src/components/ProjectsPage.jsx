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
        <Box mt="5rem">
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
          </SimpleGrid>
        </Center>
      </VStack>
    </Stack>
  );
};

export default ProjectsPage;
