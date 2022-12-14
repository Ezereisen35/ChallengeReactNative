import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './form';
import Home from './Home'

const Stack = createNativeStackNavigator();

export default function MyStack(){
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Form"
                component={Form}
            />
            
        </Stack.Navigator>
    </NavigationContainer>
    )
}