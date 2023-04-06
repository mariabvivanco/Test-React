import React from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CardProps {
  heading: string;
  icon: ReactElement;
}

const CardQuestion = ({ heading, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "120px", md: "175px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={10}
          h={10}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"primary"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size={{ base: "sm", md: "md" }}>{heading}</Heading>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardQuestion;
