import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import Listorg from '../../Components/ListOrg/listOrg';
import ButtonFav from '../../Components/Buttons/buttonFav';

export default function Home() {
    const data = [
        { id: '0', nome: 'As', empresa: 'T' },
        { id: '2', nome: 'Ad', empresa: 'Ter' },
        { id: '3', nome: 'Aw', empresa: 'Tea' },
        { id: '4', nome: 'Af', empresa: 'Tes' },
    ]
    return (
        <View style={styles.container}>
                <View style={styles.aereaSearch}>
                    <TextInput
                        style={styles.search}
                        placeholder="Procurar Organizações"
                    />
                    <TouchableOpacity>
                        <Icon name="search" size={30} color="#131313" />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerOrg}>
                    <Icon name="book" size={30} color="#0088ff" />
                    <View style={styles.titlesOrgs}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Organizações em Destaque</Text>
                        <Text style={{ color: '#808080' }}>Veja as organizações em tendência no GitHub</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Listorg data={item} />}
                />


                <ButtonFav
                    color={styles.btnSave}
                    name="Ver Salvos"
                    textStyle={styles.textBtn}
                    icon='long-arrow-right'
                    tam={25}
                    cor="#FFF"
                />
        </View>
    )
}