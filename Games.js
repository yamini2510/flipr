import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { TextButton } from "../components";
const Games = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>CRICKET</Text>
      </View>
      <ScrollView style={styles.cards}>
        <View style={styles.match}>
          <Image
            source={require("../assets/images/punjab.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 27 April,2021</Text>
          <Image
            source={require("../assets/images/benglore.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
         <View style={styles.match}>
          <Image
            source={require("../assets/images/rajisthan.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 29 April,2021</Text>
          <Image
            source={require("../assets/images/knight-riders.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
         <View style={styles.match}>
          <Image
            source={require("../assets/images/delhi.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 30 April,2021</Text> 
          <Image
            source={require("../assets/images/punjab.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
         <View style={styles.match}>
          <Image
            source={require("../assets/images/hydrabad.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 1 May,2021</Text> 
          <Image
            source={require("../assets/images/cheenai.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
         <View style={styles.match}>
          <Image
            source={require("../assets/images/cheenai.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 28 April,2021</Text> 
          <Image
            source={require("../assets/images/mumbai-indians.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
         <View style={styles.match}>
          <Image
            source={require("../assets/images/knight-riders.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginLeft: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
          <Text>On 5 May,2021</Text>
          <Image
            source={require("../assets/images/benglore.png")}
            resizeMode="cover"
            style={{
              marginTop: 5,
              marginRight: 10,
              width: 110,
              height: 110,
              borderRadius: 50,
            }}
          />
        </View>
        <TextButton
          label="Start"
          customContainerStyle={{
            position:'relative',
            bottom:35,
            width: 150,
            marginLeft: 117,
            marginBottom: 20,
            backgroundColor: "#4E5A65",
            color: "#fff",
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop:15,
    color: "white",
    fontSize: 25,
  },
  image: {
    height: 250,
    width: 250,
  },
  cards: {
    padding: 20,
    marginTop: 20,
  },
  match: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "97%",
    height: 150,
    backgroundColor: "#708090",
    borderRadius: 25,
  },
});

export default Games;
