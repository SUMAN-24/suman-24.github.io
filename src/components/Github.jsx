import { Box, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Github = () => {
  return (
    <Box mt={10}>
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
            h={{ base: 140, sm: 170, md: 200, lg: 240 }}
            borderRadius="2rem"
            pl={[10, 7, 45]}
          >
            <Githubcalendar
              username="SUMAN-24"
              year="last"
              showWeekdayLabels="true"
              labels={{
                labels: {
                  totalCount: "{{count}} contributions in {{year}}",
                  tooltip:
                    "<strong>{{count}} contributions</strong> on {{date}}",
                },
              }}
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};
