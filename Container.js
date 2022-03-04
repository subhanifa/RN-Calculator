import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

import ToDoList from "./src/screens/ToDoList";
import Calculator from "./src/screens/Calculator";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

function NativeWays() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="ToDoApp"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: theme.colors.gray[700],
        headerStyle: { backgroundColor: theme.colors.white },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "To Do List") {
            iconName = focused ? "document-text" : "document-text-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["100"],
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: theme.colors.gray["400"],
        tabBarInactiveBackgroundColor: "white",
      })}
    >
      <Tab.Screen name="To Do List" component={ToDoList} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={NativeWays}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
