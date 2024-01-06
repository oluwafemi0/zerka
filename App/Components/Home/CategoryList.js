import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas-station.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/dish.png"),
    },
    {
      id: 3,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/coffee.png"),
    },
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "600",fontFamily:'raleway-bold' }}>
        Select Top Category
      </Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>console.log(item.name)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
