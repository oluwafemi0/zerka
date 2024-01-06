import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

export default function CategoryItem({ category }) {
  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
        margin: 5,
        width: 100,
        height: 100,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        elevation: 1,
      }}
    >
      <View style={{ marginTop: "auto", marginBottom: "auto", }}>
        <Image
          style={{
            width: 40,
            height: 40,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          source={category.icon}
        />
        <Text style={{ fontSize: 14, textAlign: "center", marginTop: 5 ,fontFamily:'raleway'}}>
          {category.name}
        </Text>
      </View>
    </View>
  );
}
