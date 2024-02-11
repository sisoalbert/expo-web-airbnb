import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

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
  return (
    <View>
      <FlatList
        data={filterOptions}
        horizontal
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
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
