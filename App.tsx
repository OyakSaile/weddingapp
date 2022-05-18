import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/home/Home";
import { theme } from "./src/themes/global";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primary,
      }}
    >
      <Home />
      <StatusBar style="auto" backgroundColor="transparent" translucent={true} />
    </View>
  );
}
