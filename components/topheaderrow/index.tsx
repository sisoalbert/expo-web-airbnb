import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const TopRow = ({ isTablet }: { isTablet: boolean }) => {
  const MiddleText = () => (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", color: "#717171", fontSize: 16 }}>
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "400", color: "#717171", fontSize: 16 }}>
          Experiences
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "400", color: "#717171", fontSize: 16 }}>
          Online Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 100,
              height: 100,
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isTablet && <MiddleText />}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              color: "#717171",
              fontSize: 16,
              paddingRight: 10,
            }}
          >
            Airbnb your home
          </Text>
          <View
            style={{
              paddingRight: 10,
            }}
          >
            <Image
              source={require("../../assets/icons/globe.png")}
              style={{
                width: 15,
                height: 15,
                paddingRight: 10,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: "white",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#DDDDDD",
              padding: 5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                paddingRight: 10,
              }}
            >
              <Image
                source={require("../../assets/icons/menu.png")}
                style={{
                  width: 15,
                  height: 15,
                }}
                resizeMode="contain"
              />
            </View>
            <View>
              <Image
                source={require("../../assets/icons/avatar.png")}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        {isTablet && <MiddleText />}
      </View>
    </View>
  );
};

export default TopRow;

const styles = StyleSheet.create({});
