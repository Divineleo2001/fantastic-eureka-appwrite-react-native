import { View, Text, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CardComponent from "~/components/CardComponent";

export default function Tab() {
  return (
    <View className=" w-full h-screen">
      <View className="my-4">
        <Text className="text-2xl text-foreground mx-3">Tags</Text>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex px-4 gap-4 flex-row mx-4 mt-3">
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Cleaning</Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Plumbing</Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Electrician</Text>
            </View>

            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center">
              <Text className="text-md text-foreground text">
                Appliance Repair
              </Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Carpentry</Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Painting</Text>
            </View>

            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center">
              <Text className="text-md text-foreground text ">Service </Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Cooking</Text>
            </View>
            <View className="bg-secondary rounded-lg shadow-md p-4 flex flex-col items-center ">
              <Text className="text-md text-foreground">Painting</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="my-4">
        <Text className="text-2xl text-foreground mx-3">Cards</Text>
        <ScrollView horizontal alwaysBounceVertical showsHorizontalScrollIndicator={false} >
          <View className="flex px-4 gap-4 flex-row">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
