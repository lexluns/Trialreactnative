import React from 'react';
import { View, Stylesheet, Text } from 'react-native';
import ImageDetail from '../components/ImageDetail';



const ImageScreen = () => {
    return (
        <View>
        <ImageDetail title = 'forest' 
        path = {require ('../../assets/forest.jpg')}
        score = {4} />

        <ImageDetail title = 'Beach' path = {require ('../../assets/beach.jpg')} score =  {5}/>
        <ImageDetail 
        title = 'Mountain'
         path = {require ('../../assets/mountain.jpg')}
         score = {9}
         />
        </View>
    );
};

//const styles = Stylesheet.create ({});

export default ImageScreen;
