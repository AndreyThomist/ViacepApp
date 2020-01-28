import React from 'react'
import {View,Button,StyleSheet} from 'react-native'

const FormButton = (props) => {
    return (
        <View style={styles.container}>
            <Button color="blue" onPress={props.fetchCep} title="Buscar"></Button>
            <Button color="red"  onPress={props.clearCep} title="Limpar"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'40%',
        maxWidth:'35%',
        marginTop:30,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-around',
    }
})

export default FormButton;