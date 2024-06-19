import { View, Text } from "react-native";
import { Card } from "~/components/ui/card";

export default function Tab() {
  return (
    <View className="flex justify-center items-center flex-1 ">
      <View className="flex flex-row flex-wrap flex-1 mt-10 p-6 gap-5">
        <Card className="flex flex-1 gap-5 items-center py-5  ">
          <Text className="text-xl text-foreground">Cleaning</Text>
          <Text className="text-xl text-foreground">Plumbing</Text>
          <Text className="text-xl text-foreground">Electrician</Text>
        </Card>
        <Card className="flex flex-1 gap-5 items-center py-5">
          <Text className="text-xl text-foreground">Painting</Text>
          <Text className="text-xl text-foreground">Carpentry</Text>
          <Text className="text-xl text-foreground">Appliance Repair</Text>
        </Card>
      </View>
      <Text className="flex-1 text-xl text-foreground">Home Page</Text>
      <Text className="flex-1 text-xl text-foreground">Home Page</Text>
    </View>
  );
}
