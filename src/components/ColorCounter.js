import React, {useState} from 'react';
import { Text, StyleSheet, Button, View} from 'react-native';


const ColorCounter = ({color, onIncrease, onDecrease}) => {




return (
    <View>
        <Text>{color}</Text>
        <Button onPress = {() => onIncrease() } title=  {`Increase ${color}`} />
        <Button onPress = {() => onDecrease() } title= {`Decrease ${color}`} />

    </View>



);

};





const style = StyleSheet.create ({


});

export default ColorCounter;