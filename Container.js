import React from "react";
import { ScrollView, Heading, Box } from "native-base";
import Calculator from "./src/screens/Calculator";

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
      <Calculator />
    </Box>
  );
}
