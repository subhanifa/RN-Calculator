import React, { useState } from "react";
import {
  Text,
  Box,
  HStack,
  VStack,
  AddIcon,
  MinusIcon,
  ScrollView,
} from "native-base";
import {
  CalculatorButton,
  CalculatorOperator,
} from "../components/CalculatorButtons";

export default function CalculatorBase() {
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <Box>
      <VStack
        marginBottom={4}
        flexDir="column"
        justifyContent="space-between"
        bg="gray.200"
        height={32}
        borderRadius={10}
        paddingX={5}
        paddingY={3}
        borderColor="white"
      >
        <Text
          color="black"
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="Poppins"
        >
          {operation}
        </Text>
        <Text
          color="black"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="right"
          fontFamily="Poppins"
        >
          {result}
        </Text>
      </VStack>

      <VStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={"AC"} />
          <CalculatorButton col={1} value={","} />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={1} />
          <CalculatorButton col={1} value={2} />
          <CalculatorOperator col={1} value={"+"} />
          <CalculatorOperator col={1} value={"-"} />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={3} />
          <CalculatorButton col={1} value={4} />
          <CalculatorOperator col={1} value={"/"} />
          <CalculatorOperator col={1} value={"*"} />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={5} />
          <CalculatorButton col={1} value={6} />
          <CalculatorOperator col={1} value={"%"} />
          <CalculatorOperator col={1} value={"="} />
        </HStack>
        <HStack justifyContent="space-between" space={3}>
          <CalculatorButton col={1} value={7} />
          <CalculatorButton col={1} value={8} />
          <CalculatorButton col={1} value={9} />
          <CalculatorButton col={1} value={"0"} />
        </HStack>
      </VStack>
    </Box>
  );
}
