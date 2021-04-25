import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
 } from 'react-native';
import {TEAM} from '../constants/dummy';


const dreamteam = ({navigation}) => {

  const renderGridItem = (itemData) => {
    return(
        
    <View style={styles.gridItem}>
    <TouchableNativeFeedback
    style={{flex:1}}
    /* onPress={() => {navigation.navigate('CategoriesMealsScreen',{id:itemData.item.id,title:itemData.item.title})}} */>
    <View style={styles.container}>
      <Text style={styles.title}>
        {itemData.item.title}
      </Text>
      <Text style={styles.title}> {itemData.item.credits}</Text>
    </View>
    </TouchableNativeFeedback>
    </View>
    );
};

    return(
        <FlatList 
        data={TEAM}
        renderItem={renderGridItem}
        numColumns={2}/>
    );
};


const styles = StyleSheet.create({
    screen:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
    },
    gridItem:{
      flex:1,
      margin:10,
      marginBottom:10,
      marginTop:40, 
      height:150,
      borderRadius:10,
      overflow:'scroll'
      
    },
     container:{
        flex:1, 
         borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        backgroundColor:'#4E5A65',
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end' ,
        flexDirection:'column'
        
    } ,
    title:{
        fontSize:16,
        color:"white"
    },
    header: {
        marginTop:15,
        color: "black",
        fontSize: 25,
      },
})

export default dreamteam;
