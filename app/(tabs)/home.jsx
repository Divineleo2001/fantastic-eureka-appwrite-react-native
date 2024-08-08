import { View, Text, ScrollView, FlatList, Image, RefreshControl } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "~/lib/useColorScheme";

import { images } from "../../constants";
import SearchInput from "~/components/SearchInput";
import Trending from "~/components/Trending";
import EmptyState from "~/components/EmptyState";
import { useState } from "react";

export default function Tab() {
  const { isDarkColorScheme } = useColorScheme();

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = async () => {
    setRefreshing(true)
    // re call videos -> if any new videos appeared
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="">
      <View
        className={`${
          isDarkColorScheme ? "bg-primary-aura_primary" : "bg-white"
        }`}
      >
        <FlatList
          data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
          // data={[]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text className="text-3xl text-white">{item.id}</Text>
          )}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text
                    className={`font-pmedium text-md ${
                      isDarkColorScheme ? "text-blue-300" : "text-green-500"
                    }`}
                  >
                    Welcome Back
                  </Text>
                  <Text
                    className={`text-3xl font-psemibold ${
                      isDarkColorScheme ? "text-white" : "text-blue-300"
                    }`}
                  >
                    Divine
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <SearchInput isDark={isDarkColorScheme} />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text
                  className={`${
                    isDarkColorScheme ? "text-gray-100" : "text-black"
                  } text-lg font-pregular mb-3`}
                >
                  Latest Videos
                </Text>
                <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? [] } />
              </View>
            </View>
          )}
          ListEmptyComponent={() => (<EmptyState 
          title="No results found"
          subtitle="Try searching for something else"
          />)}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
      </View>
    </SafeAreaView>
  );
}
