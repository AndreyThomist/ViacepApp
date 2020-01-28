import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Lists = (props) => {
    let list;
    if (props.cepData !== null) {
        list = (<View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>Dados:</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>logradouro:{props.cepData.logradouro} </Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>complemento:{props.cepData.complemeto}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>bairro:{props.cepData.bairro}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>localidade:{props.cepData.localidade}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>uf:{props.cepData.uf}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>ibge:{props.cepData.ibge}</Text>
            </View>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>gia:{props.cepData.gia}</Text>
            </View>
        </View>)
    }else{
        list = <Text></Text>
    }
    return list;
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        width: '100%',
        paddingVertical: 10
    },
    title: {
        backgroundColor: '#423c3c',
        width: '80%',
        borderRadius: 7,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        marginTop: 5
    }
})

export default Lists;