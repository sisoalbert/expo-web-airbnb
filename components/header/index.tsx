import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useMediaQuery } from "react-responsive";
import TopRow from "../topheaderrow";
import SearchBarMobile from "../mobilesearchbar";
import SearchBarBig from "../bigscreensearchbar";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <View
      style={[
        {
          backgroundColor: "white",
          paddingTop: 15,
        },
        isMobile ? { paddingHorizontal: 20 } : { paddingHorizontal: 40 },
      ]}
    >
      {!isMobile && <TopRow isTablet={isTablet} />}
      {isMobile ? (
        <View style={{ flexDirection: "row" }}>
          <SearchBarMobile />
        </View>
      ) : (
        <SearchBarBig isTablet={isTablet} />
      )}
      {isMobile && <Text>Mobile</Text>}
      {isTablet && <Text>Tablet</Text>}
      {isBigScreen && <Text>BigScreen</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
