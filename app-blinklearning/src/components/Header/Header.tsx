//Header 
import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Avatar, Button, useColorModeValue, useColorMode, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import "./header.css"

interface Props {
  title:string
}

export const  Header:React.FC<Props>= ({title})=> {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box className="header" bg={useColorModeValue("gray.100", "gray.900")} >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/home" replace>
            <Avatar boxSize="60px" src={"/assets/Home.png"} cursor="pointer" />
          </Link>
          <Text>{title}</Text>
          <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Flex>
      </Box>
    </>
  );
}

