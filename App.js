import { extendTheme, NativeBaseProvider, StatusBar } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Container from "./Container";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold,
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
  };

  const customColors = {
    primary: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
    },
  };

  // Configuration Native Base Custom Theme
  const customTheme = extendTheme({
    colors: customColors,
    components: {
      Button: {
        defaultProps: {
          variant: "unstyled",
        },
        baseStyle: {
          width: 10,
          height: 20,
          borderRadius: 100,
          marginBottom: 3,
          bg: "gray.200",
          _text: {
            color: "gray.700",
            fontWeight: "bold",
          },
          _pressed: {
            bg: "gray.300",
          },
        },
      },
    },
    fontConfig,
    fonts: {
      Poppins: "Poppins",
    },
    config: {
      initialColorMode: "dark",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={customTheme}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Container />
      </NativeBaseProvider>
    );
  }
}
