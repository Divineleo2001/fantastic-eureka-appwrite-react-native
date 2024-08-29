import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeToggle } from "~/components/ThemeToggle";
import { images } from "~/constants";
import FormField from "~/components/FormField";
import CustomButton from "~/components/CustomButton";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "../../lib/appwrite";
// import { useGlobalContext } from "~/context/GlobalProvider";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);

    try {
     const response =  await signIn(form.email, form.password);

    //  console.log(response)
      // const result = await getCurrentUser();
      // setUser(result);
      // setIsLogged(true);

      Alert.alert("Success", "You are now logged in");
      // router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className=" h-full ">
      <ScrollView>
        <View className="w-full  min-h-[85vh] px-4 my-6">
          {/* Logo */}
          <View className="flex items-center justify-center bg-white p-5">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[200px] h-[50px]"
            />
          </View>
          <Text className="text-foreground text-2xl font-medium text-center mt-4">
            Log in to continue
          </Text>

          <View>
            {/* <Image
              src="http://192.168.2.113:8089/images/products/1/large.jpg"
              resizeMode="contain"
              className="w-[200px] h-[200px]"
            /> */}
          </View>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: string) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles="text-black font-bold "
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-foreground">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg ">
              {" "}
              Sign Up{" "}
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
