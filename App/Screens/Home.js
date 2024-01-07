import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";

export default function Home() {

  useEffect(()=>{
    GetNearBySearchPlace();
  },[])

  const GetNearBySearchPlace=()=>{
    GlobalApi.nearByPlace().then(resp=>{
      console.log(resp)
    })
  }

  return (
    <View style={{ padding: 30 }}>
      <Header />
      <GoogleMapView />

      <CategoryList />
    </View>
  );
}
