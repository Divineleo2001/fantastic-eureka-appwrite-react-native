import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import { images } from "~/constants";
import { Button } from "~/components/ui/button";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "~/context/GlobalProvider";

const App = () => {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className=" h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4 bg-primary">
          <View className="bg-white p-5">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[200px] h-[50px]"
            />
          </View>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-blue-200 ">AuriGraph</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[100px] h-[20px] absolute -bottom-4 right-[100px]"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation embark on a journey of limitless
            exploration with Aora
          </Text>
          <View className="flex flex-row justify-center items-center gap-3">
            <Button
              onPress={() => router.push("/sign-in")}
              className="bg-blue-400  mt-10 w-[100px]"
            >
              <View>
                <Text>Sign In</Text>
              </View>
            </Button>
            <Button
              onPress={() => router.push("/sign-up")}
              className="bg-blue-400  mt-10 w-[200px]"
            >
              <View className=" ">
                <Text>Get started</Text>
              </View>
            </Button>
          </View>
          <StatusBar style="light" backgroundColor="#161622" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
