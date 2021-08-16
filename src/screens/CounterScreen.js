import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.ValuetoChange){
        case 'increase':
        return  { ...state, count: state.count + action.payload}; 
        case 'decrease':
        return  {...state, count: state.count - action.payload};
        case 'default':
            return state;    


    }
};


const CounterScreen = () => {


    
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;
    
    return(
    <View>
    <Button title = "Increase" onPress = {() => dispatch({ ValuetoChange: 'increase', payload: 1})} />
    <Button title = "Decrease" onPress = {() => dispatch({ ValuetoChange: 'decrease', payload: 1})} />
    <Text>Current Count: {count}</Text>
    </View>
    );

};

const styles = StyleSheet.create ({


});

export default CounterScreen;