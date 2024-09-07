import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet as s, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import StoreList from "../components/StoreList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";

export default function SearchScreen() {
  // Local state to store categories of restaurants.
  // Currently, the only categories are price
  const [sortedStoresByPrice, setSortedStoresByPrice] = useState({});
  const dispatch = useDispatch();
  // Pulls 'stores' from state. Eventually contains results from yelp API
  const stores = useSelector((state) => state.restaurants.stores);

  // Sorts
  const mapStoresToCollection = () => {
    const storeCollection = {
      cheap: [],
      affordable: [],
      expensive: [],
      luxury: [],
      unlistedPrice: [],
    };
    stores.map((store) => {
      switch (store.price) {
        case "$":
          storeCollection.cheap.push(store);
          break;
        case "$$":
          storeCollection.affordable.push(store);
          break;
        case "$$$":
          storeCollection.expensive.push(store);
          break;
        case "$$$$":
          storeCollection.luxury.push(store);
          break;
        case "$$$$$":
          storeCollection.luxury.push(store);
          break;
        default:
          storeCollection.unlistedPrice.push(store);
          break;
      }
    });
    return storeCollection;
  };

  // useEffect(() => {
  //   dispatch(fetchRestaurants())
  // }, []);

  useEffect(() => {
    setSortedStoresByPrice(mapStoresToCollection);
  }, [stores]);
  return (
    <View style={styles.view}>
      <SearchBar />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {stores.length ? (
          Object.keys(sortedStoresByPrice).map((key) => {
            return <StoreList key={key} stores={sortedStoresByPrice[key]} />;
          })
        ) : (
          <Text>Loading restaurants!</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = s.create({
  view: {},
});
