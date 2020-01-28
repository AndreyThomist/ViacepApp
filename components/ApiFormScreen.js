import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Alert,Text } from 'react-native'
import FormButton from './FormButton'
import axios from 'axios'
import Lists from './Lists'

const ApiFormScreen = (props) => {
    const [cepNumber, setCepNumber] = useState(null)
    const [cepData, setCepData] = useState(null)
    const [cepNotFoud,setCepNotFoud] = useState(false)

    const changeCepHandler = (cep) => {
        setCepNumber(cep);
    }
    const clearChangeCepHandler = () => {
        setCepNumber(null);
        setCepData(null)
        setCepNotFoud(false)
    }
    const fetchCepHandler = async () => {
        if (cepNumber === null) {
            return;
        }
        if (cepNumber.match(/[0-9]{8}/)) {
            axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`).then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    if(res.data.erro){
                        setCepNotFoud(true)
                        setCepData(null)
                    }else{
                        setCepData(res.data)
                        setCepNotFoud(false)
                    }
                }
            })
        } else {
            Alert.alert('Erro formato de cep inválido', 'Por favor preencha novamente', [{ text: 'OK', style: 'destructive', onPress: clearChangeCepHandler }])
        }
    }

    let error;
    if(cepNotFoud === true){
        error = <Text>Cep Não Encontrado</Text>
    }else{
        error  = <Text></Text>
    }
    return (
        <View >
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Digite um cep" blurOnSubmit={true} value={cepNumber} onChangeText={changeCepHandler} maxLength={8} keyboardType={"numeric"} />
                </View>
                <FormButton clearCep={clearChangeCepHandler} fetchCep={fetchCepHandler} />
            </View>
            <Lists cepData={cepData}  />
            <View style={styles.error}>{error}</View>
        </View>
    );
}
const styles = StyleSheet.create({
    formContainer: {
        padding: 10,
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 7
    },
    inputContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    error:{
        justifyContent:'center',
        alignItems:'center',
        elevation:8,
        marginVertical:10,
        padding:20
    }
})
export default ApiFormScreen;