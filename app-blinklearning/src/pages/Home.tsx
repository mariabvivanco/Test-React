import React from "react";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { finish } from "../store/exerciseSlicer";
import { Link } from "react-router-dom";

const Home = () => {
  const isFinish = useSelector(finish);
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Test Online de{" "}
          <Text as={"span"} color={"orange.400"}>
            cultura general
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Es importante tener una buena cultura general, para comprender mejor
          el mundo que nos rodea, mejorar nuestra capacidad de comunicación,
          tener una mentalidad abierta y un mayor grado de sofisticación
          intelectual. Te animas a hacer un test para conocer la tuya?
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link to={"/exercise"}>
            <Button
              rounded={"full"}
              isDisabled={isFinish}
              px={6}
              colorScheme={"primary"}
              bg={"orange.400"}
              _hover={{ bg: "hover_active" }}
            >
              Iniciar Test
            </Button>
          </Link>
          <Link to={"/result"}>
            <Button rounded={"full"} px={6} isDisabled={!isFinish} bg={"bg"} 
              _hover={{ bg: "hover_noactive" }}>
              Ver resultados
            </Button>
          </Link>
        </Stack>
        <Flex w={"full"}>
          <Image src="/assets/Home.png" alt="Cultura" rounded="lg" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home;
