import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { CheckIcon } from "@chakra-ui/icons";

const ContactMePage = () => {
  const [state, handleSubmit] = useForm("meqdankv");
  if (state.succeeded) {
    return (
      <Heading
        fontFamily="body"
        fontSize="3rem"
        fontWeight="semibold"
        color="rgb(16,24,52)"
      >
        <Center>
          <HStack>
            <CheckIcon color="messenger.600" />
            <Text bgClip="text" bgGradient="linear(to-r, red.500, yellow.500)">
              Thanks for getting in Touch!
            </Text>
          </HStack>
        </Center>
      </Heading>
    );
  }

  return (
    <Stack>
      <VStack>
        <Box mt={[110, 30, 10]}>
          <Heading
            fontFamily="body"
            fontSize="3rem"
            fontWeight="semibold"
            color="rgb(16,24,52)"
          >
            Get In Touch
          </Heading>
        </Box>

        <Box pt="1rem">
          <Text
            mt="0.5rem"
            color="rgba(16, 24, 52, 0.75)"
            fontSize="xl"
            fontWeight="semibold"
          >
            using email
          </Text>
        </Box>

        <Box>
          <form onSubmit={handleSubmit}>
            <VStack>
              <FormLabel
                htmlFor="email"
                mt="0.5rem"
                color="rgba(16, 24, 52, 0.75)"
                fontSize="md"
                fontWeight="bold"
              >
                Email Address
              </FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                width="22.5rem"
                borderRadius="none"
                height="2.3rem"
                outline="2px solid teal"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <FormLabel
                mt="0.5rem"
                color="rgba(16, 24, 52, 0.75)"
                fontSize="md"
                fontWeight="bold"
              >
                Message
              </FormLabel>
              <Textarea
                id="message"
                name="message"
                type="text"
                width="22.5rem"
                borderRadius="none"
                height="2.3rem"
                outline="2px solid teal"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                type="submit"
                disabled={state.submitting}
                width="22.5rem"
                borderRadius="none"
                height="2.3rem"
                colorScheme="messenger"
                mt="0.6rem"
                fontWeight="bold"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Stack>
  );
};

export default ContactMePage;
