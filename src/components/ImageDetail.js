import React from 'react';
import { View, Stylesheet, Text, Image } from 'react-native';

const ImageDetail = props => {
   
    return (
        <View>
        <Image source = {props.path} />
        <Text>Image Detail {props.title}</Text>
        <Text>Score is {props.score} </Text>
        </View>

    );

};

//const styles = Stylesheet.create ({});

export default ImageDetail;
