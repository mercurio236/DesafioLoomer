import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.areaSearch}>
                <TextInput 
                style={styles.search} 
                placeholder="Procurar Organizações"
                />
            </View>
        </View>
    )
}