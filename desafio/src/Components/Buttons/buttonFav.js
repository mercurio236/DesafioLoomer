import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonFav({ onPress, name, color, textStyle, icon, tam, cor }) {
    return (
        <TouchableOpacity style={color} onPress={onPress}>
            <Text style={textStyle}>{name}</Text>
            <Icon name={icon} size={tam} color={cor} />
        </TouchableOpacity>
    )
}