import React from "react";
import { Text, Button } from "native-base";

export function CalculatorButton({ value, col }) {
  return (
    <Button
      flex={col}
      bg="gray.200"
      _text={{ fontWeight: "bold", fontSize: 32, color: "gray.700" }}
      borderRadius={7}
      alignItems="center"
      justifyContent="center"
      _pressed={{
        background: "gray.100",
        _text: { color: "gray.500" },
      }}
      _hover={{
        background: "gray.100",
        _text: { color: "gray.600" },
      }}
      marginBottom={3}
    >
      {value}
    </Button>
  );
}

export function CalculatorOperator({ value, col }) {
  return (
    <Button
      flex={col}
      bg="gray.500"
      _text={{ fontWeight: "bold", fontSize: 32, color: "gray.100" }}
      borderRadius={7}
      alignItems="center"
      justifyContent="center"
      _pressed={{
        background: "gray.700",
        _text: { color: "gray.50" },
      }}
      _hover={{
        background: "gray.600",
        _text: { color: "gray.50" },
      }}
      marginBottom={3}
    >
      {value}
    </Button>
  );
}
