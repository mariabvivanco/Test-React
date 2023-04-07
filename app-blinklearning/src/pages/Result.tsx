import React, { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import {Header} from "../components/Header/Header";
import { ResultDet } from "../components/Result/ResultDet";
import { ResultTotal } from "../components/Result/ResultTotal";
import {TablaAnswer} from "../components/Result/TableAnswer";

const Result = () => {
  const [seeResult, setSeeResult] = useState(false);
  return (
    <Box h="100vh">
      <Header title="Resultados del Test"></Header>
      <Box h="100px"></Box>
      {!seeResult && <ResultTotal />}
      <Center>
        <Button
          rounded={"full"}
          px={6}
          colorScheme={"primary"}
          bg={"orange.400"}
          _hover={{ bg: "hover-active" }}
          onClick={() => setSeeResult(!seeResult)}
        >
          {seeResult ? "OcultarDetalles" : "Ver Detalles"}
        </Button>
      </Center>

      {seeResult && <ResultDet />}
      {seeResult && <TablaAnswer />}
    </Box>
  );
};

export default Result;
