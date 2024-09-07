import React, { useState } from "react";
import { View, StyleSheet as s, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeQuery, fetchRestaurants } from "../store";
import { useSelector } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.restaurants.query);
  return (
    <View style={style.view}>
      <Feather size={40} name={"search"} />
      <TextInput
        autoCapitalize="none"
        value={query}
        onChangeText={(text) => dispatch(changeQuery(text))}
        style={style.input}
        placeholder="Search restaurants..."
        placeholderTextColor={"#f7f7f7"}
        onEndEditing={() => {
          dispatch(fetchRestaurants(query));
        }}
      />
    </View>
  );
}

const style = s.create({
  view: {
    backgroundColor: "#bbb",
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: { fontSize: 20, paddingHorizontal: 10, marginLeft: 10 },
});
