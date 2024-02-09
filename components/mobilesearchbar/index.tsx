import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SearchBarMobile = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.98,
          borderWidth: 1,
          borderColor: "#DDDDDD",
          borderRadius: 55 / 2,
          height: 55,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.1,
        }}
      >
        <View
          style={{
            paddingRight: 10,
          }}
        >
          <Image
            source={require("../../assets/icons/search.png")}
            style={{
              width: 18,
              height: 18,
              paddingRight: 10,
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Where to?</Text>
          <Text style={{ color: "#717171", fontSize: 12 }}>
            Anywhere, Anytime, Add guest
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 45 / 2,
            height: 45,
            width: 45,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.1,
          }}
        >
          <Image
            source={require("../../assets/icons/filter.png")}
            style={{
              width: 18,
              height: 18,
              paddingRight: 10,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBarMobile;

const styles = StyleSheet.create({});
