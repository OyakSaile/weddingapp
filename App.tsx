import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/routes";
import { Home } from "./src/screens/home/Home";
import { theme } from "./src/themes/global";

export default function App() {
  return <Routes />;
}
