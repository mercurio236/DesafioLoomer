import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconsFa from 'react-native-vector-icons/Feather';
import styles from './styles'
import Listorg from '../../Components/ListOrg/listOrg';
import ButtonFav from '../../Components/Buttons/buttonFav';
import api from '../../Connections/api';

export default function Home({ navigation }) {
    const data = [
        { id: '0', nome: 'Arley souto', empresa: 'Teste2' },
        { id: '2', nome: 'Ad', empresa: 'Ter' },
        { id: '3', nome: 'Aw', empresa: 'Tea' },
        { id: '4', nome: 'Af', empresa: 'Tes' },
    ]

    useEffect(() => {
        setList(repo)
        setItems(repo)
        requisicao()
    }, [list, text, repo, items])

    const [text, setText] = useState('');
    const [list, setList] = useState('');
    const [items, setItems] = useState('');
    const [repo, setRepo] = useState([])

    async function requisicao() {
      await api.get(`users/`+ text +`/repos`)
            .then((res) => {
                setList(res.data)
            })
            .catch((e) => {
                console(e)
            })
    }

    function SearchFilterFunction(text) {
        const filterList = items.filter((item) => {
            const itemFilter = item.name ? item.name.toUpperCase() : ''.toUpperCase()
            const newText = text.toUpperCase();
            return itemFilter.indexOf(newText) > -1

        });

        setList(filterList)
        setText(text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.aereaSearch}>
                <TextInput
                    style={styles.search}
                    placeholder="Procurar Organizações"
                    onChangeText={(t) => SearchFilterFunction(t)}
                    value={text}
                />
                <TouchableOpacity onPress={requisicao}>
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

            {list.length === 0 ?
                (
                    <View style={{ height: 490, alignItems: 'center', margin: 40 }}>
                        <IconsFa name="frown" size={40} />
                        <Text style={{ textAlign: 'center', display: 'flex', }}>Ops, não encontramos uma organização com este nome</Text>
                    </View>
                ) : (
                    <FlatList
                        data={list}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Listorg data={item} />}
                    />
                )}






            <ButtonFav
                color={styles.btnSave}
                name="Ver Salvos"
                textStyle={styles.textBtn}
                icon='long-arrow-right'
                tam={25}
                cor="#FFF"
                onPress={() => navigation.navigate('Favorito')}
            />
        </View>
    )
}