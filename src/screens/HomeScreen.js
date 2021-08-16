import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
  <View> 
  <Text style={styles.text}>Hi There</Text>
  <Button onPress = {() => navigation.navigate('Components')} title = "Go to Components Demo" />


  <TouchableOpacity onPress = {() =>  navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {() =>  navigation.navigate('Image')}>
    <Text>Go to Image Demo</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {() =>  navigation.navigate('Counter')}>
    <Text>Go to Counter Screen</Text>
  </TouchableOpacity>


  <TouchableOpacity onPress = {() =>  navigation.navigate('Color')}>
    <Text>Go to Color Screen</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {() =>  navigation.navigate('ColorAdjust')}>
    <Text>Go to Color Adjust Screen</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {() =>  navigation.navigate('Text')}>
    <Text>Go to Input Text Screen</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {() =>  navigation.navigate('Box')}>
    <Text>Go to Box Screen</Text>
  </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
