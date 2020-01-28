import React,{useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        backgroundColor: '#347aeb',
        elevation:9
    },
    titleContainer:{
        flexDirection:'row',
        padding:40,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'white',
        fontSize:20
    }
})

export default Header;