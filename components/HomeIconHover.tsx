import { View } from "lucide-react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { HomeIcon } from "~/lib/icons/HomeIcon";

export function HomeIconHover() {
  return (
    <Pressable className="web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2">
      {({ pressed }) => (
        <View>
          <HomeIcon className="text-foreground " size={23} strokeWidth={1.25} />
        </View>
      )}
    </Pressable>
  );
}
