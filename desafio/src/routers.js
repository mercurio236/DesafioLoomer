import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Favorito from './Pages/Favorito';

export default function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Favorito" component={Favorito}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}