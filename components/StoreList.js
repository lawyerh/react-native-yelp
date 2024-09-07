import React from "react";
import { View, FlatList, Text, StyleSheet as s } from "react-native";
import RestaurantCard from "./RestaurantCard";

export default function StoreList({ stores }) {
  if (!stores.length) return;

  const configureTitle = () => {
    let title;
    switch (stores[0].price) {
      case "$":
        title = "Cheap eats - $";
        break;
      case "$$":
        title = "Affordable meals - $$";
        break;
      case "$$$":
        title = "Splurges - $$$";
        break;
      case "$$$$":
        title = "Luxury - $$$$";
        break;
      case "$$$$$":
        title = "Black Label - $$$$$";
        break;
      default:
        title = "Price varies";
    }
    return title;
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>{configureTitle()}</Text>

      <FlatList
        horizontal
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <RestaurantCard storeInfo={item} />;
        }}
      />
    </View>
  );
}

const style = s.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: -0.5,
    marginBottom: 5,
  },
});
