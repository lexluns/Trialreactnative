import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";



const InputText = () => {
        const [password, setPassword] = useState ('');

    return( 
    
    <View>
        <Text>Enter Password:</Text>
        <TextInput 
        style = {styles.input}
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {password}
        onChangeText = {(NewValue) => setPassword(NewValue) }
        />
        <Text>Your password is {password}</Text>

        {password.length < 4 ? <Text>Password must be 4 only</Text> : null}

        
    </View>
    
    );


};

const styles = StyleSheet.create({

    input: {

        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

}) ;


export default InputText;
