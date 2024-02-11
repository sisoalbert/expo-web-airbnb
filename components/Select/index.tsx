import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { filterOptions } from "../../assets/icons/filters";

const Select = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current item index
  const flatListRef = useRef(null); // Ref to FlatList component

  const handleNext = () => {
    // Check if there's a next item
    if (currentIndex < filterOptions.length - 1) {
      setCurrentIndex(currentIndex + 1);

      flatListRef.current &&
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleBack = () => {
    // Check if there's a previous item
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current &&
        flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          left: 0,
          position: "absolute",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "coral",
          height: 100,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <Pressable style={styles.button} onPress={handleBack}>
          <Text>Back</Text>
        </Pressable>
      </View>

      <View style={{ flex: 0.8, backgroundColor: "white" }}>
        <FlatList
          ref={flatListRef}
          data={filterOptions}
          horizontal
          initialScrollIndex={currentIndex} // Set initial scroll position
          renderItem={({ item }) => (
            <Pressable
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Image
                source={item.url}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
              <Text>{item.name}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleNext}>
          <Text>Next</Text>
        </Pressable>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 16,
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../../assets/icons/filter.png")}
            style={{ height: 20, width: 20, marginHorizontal: 10 }}
            resizeMode="contain"
          />
          <Text>Filters</Text>
        </View>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    // right: 0,
    // position: "absolute",
    flex: 0.2,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
  },
});
