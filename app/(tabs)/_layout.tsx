import { Tabs } from "expo-router";
import { Ionicons,FontAwesome6 } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={"index"}
        options={{
          title: "home",
          tabBarIcon: () => <Ionicons name="home" size={20} />,
        }}
      />
      <Tabs.Screen
        name={"about"}
        options={{
          title: "About",
          tabBarIcon: () => <Ionicons name="person" size={20} />,
        }}
      />
      <Tabs.Screen
        name={"test"}
        options={{
          title: "Test",
          tabBarIcon: () => <FontAwesome6 name="question" size={20} />,
        }}
      />
      <Tabs.Screen
        name={"list"}
        options={{
          title: "List",
          tabBarIcon: () => <Ionicons name="list" size={20} />,
        }}
      />
    </Tabs>
  );
}

//Tabs
// stack
// pages
