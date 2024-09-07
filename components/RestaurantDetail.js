import { View, Text, StyleSheet as s, Image } from "react-native";
import { useSelector } from "react-redux";

export default function RestaurantDetail({ route }) {
  // Store ID was passed as a route param
  const { storeID } = route.params;

  // Filter through all stores by the provided store ID
  const store = useSelector(
    (state) => state.restaurants.stores.filter((rest) => rest.id === storeID)[0]
  );

  console.log(store);

  return (
    <View style={style.view}>
      <Text>{store.name}</Text>
    </View>
  );
}

const style = s.create({
  view: {},
  text: {},
  image: {},
});
