import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "~/lib/useColorScheme";
import { icons } from "~/constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  return (
    <View className={`space-y-10 ${otherStyles}`}>
      <Text className="text-foreground  font-medium mb-3">{title}</Text>

      <View className="w-full h-16 px-4  rounded-2xl border-2 border-black-200 focus:border-yellow-500 flex flex-row items-center">
        <TextInput
          className={`flex-1 text-${
            isDarkColorScheme ? "white" : "black"
          } font-semibold text-base`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
         {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
