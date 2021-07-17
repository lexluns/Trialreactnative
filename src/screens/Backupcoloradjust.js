import React, {useState} from 'react';
import { Text, StyleSheet, Button, View, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const Backupcoloradjust = () => {

const COLOR_INCREMENT = 15;
const [red, setRed] = useState(0);
const [green, setGreen] = useState(0);
const [blue, setBlue] = useState(0);

const setColor = (color, change) => {

    switch(color){
      // multi if statement  
        case 'red':
            red + change > 255 || red + change < 0 ? null :  setRed (red+ change);
            return;
        default:
            return;
            //2nd condition in a switch statement
            //case 'red':
            //red + change > 255 || red + change < 0 ? null :  setRed (red+ change);
            //return;

     // if (condition) {do this} else {do this}
    }



};





return (
    <View>

        <ColorCounter onIncrease = {() => setColor('red' , COLOR_INCREMENT)} onDecrease = {() => setColor('red' , -1 * COLOR_INCREMENT)} color = "Red"/>
        <ColorCounter onIncrease = {() => setGreen( green + COLOR_INCREMENT)} onDecrease = {() => setGreen(green - COLOR_INCREMENT)}  color = "Blue"/>
        <ColorCounter onIncrease = {() => setBlue( blue + COLOR_INCREMENT)} onDecrease = {() => setBlue(blue - COLOR_INCREMENT)}  color = "Green"/>

        <View style = {{height:100, width:100, backgroundColor: `rgb(${red}, ${green}, ${blue} )` }}></View>

    </View>

);

};





const style = StyleSheet.create ({


});



export default Backupcoloradjust;