import { View, Text,Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function GoogleMapView() {

    const [mapRegion, setmapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
    });

    

  return (
    <View style={{
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    }}>
       <MapView style={{
        width:Dimensions.get('screen').width*0.9,
        height:Dimensions.get('screen').height*0.23,
        borderRadius:20
       }} 
       provider={PROVIDER_GOOGLE}
       showsUserLocation={true}
       region={mapRegion}
       >

       </MapView>
    </View>
  )
}