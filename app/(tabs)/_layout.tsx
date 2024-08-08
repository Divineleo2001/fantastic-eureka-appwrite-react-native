import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeToggle } from "~/components/ThemeToggle";
import { Tabs, Redirect } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";

interface TabIconProps {
  icon: any;
  color: string;
  focused: boolean;
  name: string;
}
const TabIcon = ({ icon, color, focused, name }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-semibold" : "font-regular"
        } text-xs text-foreground`}
      >
        {" "}
        {name}
      </Text>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          borderTopWidth: 1,
          paddingTop: 10,
          borderTopColor: "#CDCDE0",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmarks"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
            headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
