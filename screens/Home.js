import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const Home = () => {

    const [ten, setTen] = useState('');
    const [ten1, setTen1] = useState('');

    const setTen2 = () => {
        setTen1(ten)
    }

  return (
    <View style={styles.view}>
        <TextInput
            placeholder='Nhập tên'
            style={styles.textInput}
            onChangeText={(txt) => setTen(txt)}
            value={ten}
        >
        </TextInput>
        <TouchableOpacity
            onPress={setTen2}
            style={styles.button}
        >
            <Text>Show</Text>
        </TouchableOpacity>
        <Text 
            style={styles.text}
        >
            Hello {ten1}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    view: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        width:'80%',
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10
    },
    button:{
        marginTop:10,
        backgroundColor:'#0782F9',
        width:'30%',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:10
    },
    text: {
        marginTop:10
    }
})