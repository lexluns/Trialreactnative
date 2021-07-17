import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const Friends = [
        {name: 'Friend#1', age : 20 },
        {name: 'Friend#2', age : 27 },
        {name: 'Friend#3', age : 16 },
        {name: 'Friend#4', age : 10 },
        {name: 'Friend#5', age : 1  },
        {name: 'Friend#6', age : 23 },
        {name: 'Friend#7', age : 26 }

    ];

    return(

       <FlatList 
       keyExtractor= {(friend) => friend.name}
       data = {Friends}
       renderItem = {({item}) => {
        return <Text style = {styles.textStyle}> {item.name} - Age : {item.age}</Text>;
       }}
        />
    );


};

const styles = StyleSheet.create({

textStyle: {
    marginVertical: 20

}
}) ;


export default ListScreen;
