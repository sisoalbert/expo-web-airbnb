import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";

const Select = () => {
  const filterOptions = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
    { id: 6, name: "Option 6" },
    { id: 7, name: "Option 7" },
    { id: 8, name: "Option 8" },
    { id: 9, name: "Option 9" },
    { id: 10, name: "Option 10" },
    { id: 11, name: "Option 11" },
    { id: 12, name: "Option 12" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track current item index
  const flatListRef = useRef(null); // Ref to FlatList component

  const handleNext = () => {
    // Check if there's a next item
    if (currentIndex < filterOptions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 }); // Smooth scroll
    }
  };

  const handleBack = () => {
    // Check if there's a previous item
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 }); // Smooth scroll
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 0.8 }}>
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
                padding: 10,
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#DDDDDD",
              }}
            >
              <View style={{ height: 15, width: 15, backgroundColor: "red" }} />
              <Text>{item.name}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleBack}>
          <Text>Back</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleNext}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    right: 0,
    position: "absolute",
    flex: 0.2,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
  },
});
