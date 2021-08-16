import React from "react";
import {Text, StyleSheet, View} from "react-native";



const BackupBoxScreen = () => {
        

    return( 
    <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle1}>Child #1</Text>
        <Text style = {styles.textStyle2}>Child #2</Text>
        <Text style = {styles.textStyle3}>Child #3</Text>
    </View>
    );


};

const styles = StyleSheet.create({

    
    //alignItems option flex-start; center; flex-end
    //flexDirection option column; row
    //justifyContent: flex-start (default), center,flex-end, space-between, space-around
    // flex value should be equal to 10 (Parent space)
    // alignSelf will override alignItems on parent style prop. Same values as alignItems.
    //dont forget box model principles please border padding margin. etc.
    //Position: relative; absolute; default is relative for absolute it will ignore elements with siblings however it will obey with flex box prop with the parent.
    //top:0, bottom:0 ; left: 0; right :0; same as margin
    //...Stylesheet.absoluteFillObject = position: absolute, top, bottom,left, right = 0
    viewStyle: {
        flexDirection: 'row',
        borderWidth: 3,
        justifyContent: 'space-between',
        alignItems : 'flex-start',
        borderColor: 'black',
        height: 100
        
        
        

    },

    textStyle1: {
        
        borderWidth: 3,
        height: 50,
        width: 50,
        
        borderColor: 'red'
        
          
    },

    //Try using nested parent style

    textStyle2: {
        
        borderWidth: 3,
        height: 50,
        top: 50,
        width: 50,
        alignSelf:'flex-end',
        borderColor: 'red'
          
    },

    textStyle3: {
        
        borderWidth: 3,
        height: 50,
        width: 50,
        borderColor: 'red'
          
    }
});


export default BackupBoxScreen;
