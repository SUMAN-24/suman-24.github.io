import { Box, Center, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Github = () => {
  return (
    <Stack mt={10}>
      <Center>
        <VStack>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-l,#7928CA, #FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            align="left"
          >
            My Github Statistics
          </Text>
          <Box
            border="4px solid teal"
            borderRadius="2rem"
            w={[240, 680, 1140]}
            pl={[2, 7, 45]}
            h={[10, 40, 60]}
          >
            <Githubcalendar
              username="SUMAN-24"
              year="last"
              showWeekdayLabels="true"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </Box>
        </VStack>
      </Center>
    </Stack>
  );
};
