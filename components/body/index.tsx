import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  useWindowDimensions,
} from "react-native";
import { useMediaQuery } from "react-responsive";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../../assets/images";

const data = [
  { id: 1, name: "Item 1", url: image1 },
  { id: 2, name: "Item 2", url: image2 },
  { id: 3, name: "Item 3", url: image3 },
  { id: 4, name: "Item 4", url: image4 },
  { id: 5, name: "Item 5", url: image5 },
  { id: 6, name: "Item 6", url: image6 },
];

const MyFlatList = () => {
  const { width } = useWindowDimensions();
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 930 });
  const isLaptop = useMediaQuery({ minWidth: 931, maxWidth: 1020 });
  const isDesktop = useMediaQuery({ minWidth: 1021, maxWidth: 1600 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1601, maxWidth: 1920 });
  const isExtraLargeDesktop = useMediaQuery({ minWidth: 1921 });

  // Define columns based on device type
  const numColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLaptop) return 3;
    if (isDesktop) return 4;
    if (isLargeDesktop) return 5;
    if (isExtraLargeDesktop) return 6;
    return 1; // Default to 1
  };

  const renderItem = ({ item }) => {
    // Calculate image dimensions based on current number of columns
    const columnCount = numColumns();
    const marginSize = 10; // Adjust margin size as needed
    const imageSize = (width - marginSize * (columnCount + 1)) / columnCount;
    return (
      <View>
        <Image
          source={item.url}
          style={{
            width: imageSize,
            height: imageSize,
            backgroundColor: "#ccc",
            borderRadius: 10,
            margin: marginSize,
          }}
        />
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={numColumns()}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default MyFlatList;
