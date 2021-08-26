import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Listorg({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardText}>
                    <Text>{data.nome}</Text>
                    <Text>{data.empresa}</Text>
                    <TouchableOpacity onPress={() => alert(data.id)} style={styles.btnSave}>
                        <Icon style={{ right:20}} name="bookmark" color="rgb(33, 150, 243)" size={20}/>
                        <Text style={{color:'#2196f3', fontSize:16}}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
