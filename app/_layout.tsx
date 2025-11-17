import { Amplify } from 'aws-amplify';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper';
import outputs from '../amplify_outputs.json';
import "../i18n";

Amplify.configure(outputs);

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
