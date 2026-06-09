import Sidebar from "@/components/sidebar";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{position:"relative"}}>
      <Sidebar/>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" />
        <Stack.Screen name="projects" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
