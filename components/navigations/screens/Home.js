import React from 'react'
import {View, Text,Button,StyleSheet } from "react-native"

const Home = ({navigation}) => {
    return (
        <View style={styles.homeMain}>
            <Text style={styles.homeText}>Home Screen</Text>
            <Button title="Contact" onPress={()=>navigation.navigate("Contact")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeMain:{
        flex:1,
        alignItems:'center',
        marginVertical:40
    },
    homeText:{
       
        marginBottom:40
    }
})

export default Home
