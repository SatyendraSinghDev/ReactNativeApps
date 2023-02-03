import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;


/*
import { View, Text, StatusBar, Platform } from "react-native";
import React from "react";

const Main = () => {
  return (
    <View
      style={{
        paddingVertical:
          Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text>Main</Text>
      </SafeAreaView>
    </View>
  );
};

export default Main;
*/