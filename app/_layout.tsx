import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false,animation:"slide_from_left",animationDuration:5000 }}>
        <Stack.Screen name="home" />
        <Stack.Screen name="projects" />
      </Stack>
    </SafeAreaProvider>
  );
}
