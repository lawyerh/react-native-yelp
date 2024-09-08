import {
  View,
  Text,
  StyleSheet as s,
  Image,
  Linking,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

export default function RestaurantDetail({ route }) {
  // Store ID was passed as a route param
  const { storeID } = route.params;

  // Filter through all stores by the provided store ID
  const store = useSelector(
    (state) => state.restaurants.stores.filter((rest) => rest.id === storeID)[0]
  );
  console.log(store);

  const handlePress = () => {
    Linking.openURL(store.url);
  };

  return (
    <View style={style.view}>
      <Image
        style={style.image}
        source={
          store.image_url
            ? {
                uri: store.image_url,
              }
            : require("../assets/favicon.png")
        }
      />
      <Text style={style.title}>{store.name}</Text>
      <Text>{store.rating} rating</Text>
      <Text>{store.is_closed ? "Closed" : "Open"}</Text>
      <Text onPress={handlePress}>Website</Text>
    </View>
  );
}

const style = s.create({
  view: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {},
  image: { width: "100%", height: 200, resizeMode: "cover", marginBottom: 10 },
});
