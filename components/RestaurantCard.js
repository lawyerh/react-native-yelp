import { View, Text, StyleSheet as s, Image } from "react-native";
import Favicon from "../assets/favicon.png";

export default function RestaurantCard({ storeInfo }) {
  return (
    <View style={style.cardContainer}>
      <View style={{ marginRight: 20 }}>
        <Image
          style={style.image}
          source={
            storeInfo.image_url
              ? {
                  uri: storeInfo.image_url,
                }
              : require("../assets/favicon.png")
          }
        />
        <Text>{storeInfo.name}</Text>
        {storeInfo.categories && <Text>{storeInfo.categories[0].title}</Text>}
      </View>
      <View>
        <Text>{storeInfo.rating} stars</Text>
        <Text style={{ color: storeInfo.is_closed ? "red" : "green" }}>
          {storeInfo.is_closed ? "Closed" : "Open"}
        </Text>
      </View>
    </View>
  );
}

const style = s.create({
  cardContainer: {
    height: 180,
    aspectRatio: 2 / 1.2,
    marginRight: 10,
    backgroundColor: "#f7f7f7",
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {},
});
