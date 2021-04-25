import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const notifications = () =>{
    return(
        <View style={styles.container}>
            <Text>notification page</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:0.5,
        alignItems:'center'
    }
})

export default notifications;