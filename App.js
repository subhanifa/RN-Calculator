import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddIcon, extendTheme, NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  ComicNeue_400Regular,
  ComicNeue_700Bold,
} from "@expo-google-fonts/comic-neue";

import Container from "./Container";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
    ComicNeue_400Regular,
    ComicNeue_700Bold,
  });

  const fontConfig = {
    Poppins: {
      400: {
        normal: "Poppins_400Regular",
        italic: "Poppins_400Regular_Italic",
      },
      600: {
        normal: "Poppins_600SemiBold",
      },
      700: {
        normal: "Poppins_700Bold",
      },
    },
    ComicNeue: {
      400: {
        normal: "ComicNeue_400Regular",
      },
      700: {
        normal: "ComicNeue_700Bold",
      },
    },
  };

  const customColors = {
    primary: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customColors,
    fontConfig,
    fonts: {
      Poppins: "Poppins",
      ComicNeue: "ComicNeue",
    },
    config: {
      initialColorMode: "dark",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
