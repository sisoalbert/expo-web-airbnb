import "react-native-match-media-polyfill";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import Body from "./components/body";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
