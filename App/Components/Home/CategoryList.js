import { View, Text } from 'react-native'
import React from 'react'

export default function CategoryList() {
    const CategoryList=[
        {
            id:1,
            name: 'Gas Station',
            value: 'gas_station',
            icon: require('./../../../assets/gas-station.png')
        },
        {
            id:2,
            name: 'Restaurants',
            value: 'restaurant',
            icon: require('./../../../assets/dish.png')
        },
    ]

  return (
    <View style={{marginTop:15}}>
      <Text style={{fontSize:20, marginBottom: 10, fontWeight:'600',}} >Select Top Category</Text>
    </View>
  )
}