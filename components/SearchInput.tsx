import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery , isDark} :any) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className={`flex flex-row mb-8 items-center space-x-4 w-full h-16 px-4 rounded-2xl  ${isDark ? " bg-black-100 border-2 border-black-200 focus:border-secondary" : "bg-blue-100 border-2 border-blue-300 focus:border-blue-500"} `}>
      <TextInput
        className={`text-base mt-0.5 ${isDark ? "text-white" : "text-blue-700"} flex-1 font-pregular`}
        value={query}
        placeholder="Search for a product"
        placeholderTextColor={`${isDark ? "white" : "black"}`}
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;