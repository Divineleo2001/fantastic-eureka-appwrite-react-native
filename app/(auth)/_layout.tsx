import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ThemeToggle } from "~/components/ThemeToggle";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: true,

            headerRight: () => <ThemeToggle />,
            title: "Sign In",
          }}
        />
        <Stack.Screen name="sign-up" options={{ headerShown: true ,
         headerRight: () => <ThemeToggle />,
         title: "Sign Up",
         }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
