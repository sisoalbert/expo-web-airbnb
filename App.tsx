import "react-native-match-media-polyfill";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMediaQuery } from "react-responsive";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: 10,
        },
        !isMobile && { borderTopColor: "#DDDDDD", borderTopWidth: 1 },
      ]}
    >
      <View
        style={[
          {
            backgroundColor: "#fff",
          },
          isMobile && { paddingHorizontal: 20 },
          isTablet && { paddingHorizontal: 40 },
          isBigScreen && { paddingHorizontal: 60 },
        ]}
      >
        <Select isMobile={isMobile} isTablet={isTablet} />
        <MyFlatList isMobile={isMobile} isTablet={isTablet} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>{isMobile && "Mobile"}</Text>
        <Text>{isTablet && "Tablet"}</Text>
        <Text>{isBigScreen && "BigScreen"}</Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}

function AppNav() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <NavigationContainer>
      {isMobile ? <MyTabs /> : <HomeScreen />}
    </NavigationContainer>
  );
}
import Body from "./components/body";
import Select from "./components/Select";
import MyFlatList from "./components/body";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AppNav />
      {/* <Body /> */}
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
