import React from "react";
import {
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  AddIcon,
  MinusIcon,
} from "native-base";
import { CalculatorButton, CalculatorOperator } from "./CalculatorButtons";

export default function CalculatorBase() {
  return (
    <Box height="full" bg="gray.300" paddingTop={30} paddingX={4}>
      <Heading
        fontFamily="Poppins"
        size="md"
        fontWeight="normal"
        color="darkText"
        paddingY={5}
      >
        Display
      </Heading>

      <Box
        marginBottom={8}
        bg="white"
        height={20}
        borderRadius={10}
        paddingX={5}
        justifyContent="center"
        borderColor="white"
      >
        <Text
          color="black"
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="Poppins"
        >
          1
        </Text>
      </Box>

      <VStack>
        <HStack justifyContent="space-between">
          <CalculatorButton val={1} />
          <CalculatorButton val={2} />
          <CalculatorOperator val={<AddIcon size={5} />} />
          <CalculatorOperator val={<MinusIcon size={5} />} />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton val={3} />
          <CalculatorButton val={4} />
          <CalculatorOperator
            val={
              <Text fontSize="2xl" fontWeight="bold">
                /
              </Text>
            }
          />
          <CalculatorOperator
            val={
              <Text fontSize="2xl" fontWeight="bold">
                *
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton val={5} />
          <CalculatorButton val={6} />
          <CalculatorOperator
            val={
              <Text fontSize="2xl" fontWeight="bold">
                %
              </Text>
            }
          />
          <CalculatorOperator
            val={
              <Text fontSize="2xl" fontWeight="bold">
                =
              </Text>
            }
          />
        </HStack>
        <HStack justifyContent="space-between">
          <CalculatorButton val={7} />
          <CalculatorButton val={8} />
          <CalculatorButton val={9} />
          <CalculatorButton val={0} />
        </HStack>
      </VStack>
    </Box>
  );
}
