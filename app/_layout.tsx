import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper';
import "../i18n";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </PaperProvider>
  );
}
