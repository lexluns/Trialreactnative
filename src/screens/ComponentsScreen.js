import React from 'react';
import { Text, StyleSheet, View } from 'react-native';




const ComponentsScreen = () => {

const Subheader = <Text style = {styles.SubheaderStyle}>My name is Alex</Text>;

return (
    <View style = {styles.container}>
    <Text style = {styles.textStyle}>This is the component</Text>
    {Subheader}
    </View>
);

};


const styles = StyleSheet.create({

    SubheaderStyle: {
        fontSize : 20

    },

    textStyle: {
        fontSize: 45

    },

    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#20232a"
      }

});

export default ComponentsScreen;