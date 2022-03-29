import React from "react";
import { Text, VStack, ScrollView, Image, View } from "native-base";
import { ListItem } from "react-native-elements";

export default function Home() {
  return (
    <ScrollView backgroundColor="white" >
      <View margin="auto" paddingTop={100}>
        <Image size={250} 
        resizeMode={"contain"} 
        borderRadius={300} 
        alt="profile-photo"
        source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} 
        />
        <Text color="gray.500" fontSize="md" margin="auto" paddingTop={3} fontFamily="Poppins">
          Subhan Hanifa
        </Text >
        <Text color="gray.500" fontSize="md" margin="auto" fontFamily="Poppins">
        Fullstack Developer
        </Text>
      </View>
    </ScrollView>
  );
}
