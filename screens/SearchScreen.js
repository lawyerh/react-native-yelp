import React from "react";
import { View, Text, StyleSheet as s } from "react-native";
import SearchBar from "../components/SearchBar";

export default function SearchScreen() {
  return (
    <View style={styles.view}>
      <SearchBar />
    </View>
  );
}

const styles = s.create({
  view: {},
});
