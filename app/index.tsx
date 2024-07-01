import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeToggle } from "~/components/ThemeToggle";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      
      <Text className="text-3xl font-black ">Aora !</Text>
      <Link href="/sign-in">
      Home
      </Link>
    </View>
  );
};

export default App;
