import { Tabs } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/globalStyles";
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomTabBarButton from "@/components/CustomTabBarBtn";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="feed"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS == "ios" ? 0 : 10,
          left: Platform.OS == "ios" ? 0 : 10,
          right: Platform.OS == "ios" ? 0 : 10,
          elevation: 1,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: Platform.OS == "ios" ? 70 : 50,
        },
      }}
    >
      x``
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="feed"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feedByCategory/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"appstore-o"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="add" size={35} color="#fff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"notification"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={"user"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
