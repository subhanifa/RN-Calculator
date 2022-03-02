import React from "react";
import { ScrollView, Heading, Box } from "native-base";
import CalculatorBase from "./src/screens/CalculatorBase";

export default function Container() {
  return (
    <Box height="full" bg="gray.50" paddingTop={30} paddingX={4}>
      <Heading
        fontFamily="Poppins"
        size="lg"
        fontWeight="bold"
        color="darkText"
        paddingY={3}
      >
        Waysmath
      </Heading>
      <CalculatorBase />
    </Box>
  );
}
