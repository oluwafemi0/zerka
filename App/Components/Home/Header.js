import { View, Text, Image,StyleSheet,TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors';

export default function Header() {
  return (
    <View style={{display: 'flex',flexDirection:'row',justifyContent:'space-evenly',gap:20,alignItems:'center',paddingTop: 10,}}>
      <Image source={require('../../../assets/logo.png')} 
            style={styles.logo}/>

        <View>
            <TextInput placeholder='Search' 
                style={styles.searchBar}
            />
        </View>

        <Image source={require('../../../assets/camera3.png')} 
            style={styles.userImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width: 40,
        height: 40,
    },
    searchBar: {
        width: Dimensions.get('screen').width*0.7,
        borderWidth: 1,
        borderColor: Colors.black,
        padding: 4,
        borderRadius: 40,
        paddingLeft: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
    }

});