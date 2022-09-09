import { Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const  Login = (props) => {

    const account=[
        {useName:'sang',password:'sang123'},
        {useName:'sang123',password:'sang123'},
    ]

    const [email, setEmail] = useState('') 
    const [passWord, setPassWord] = useState('') 
    const [thongBao, setThongBao] = useState(false)

    const moveScreen = () => props.navigation.navigate("Home")

    const moveScreen1 = () => {
        for(var i = 0; i < account.length;i++){
            if(account[i].useName == email && account[i].password == passWord){
                props.navigation.navigate("Home")
            }    
        }
    }

    const navigation = useNavigation

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding" 
    >
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            value={passWord}
            onChangeText={text => setPassWord(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={moveScreen1}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:10,
        marginTop:5
    },
    button:{
        backgroundColor: '#0782F9',
        width:'100%',
        borderRadius:10,
        padding:15,
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782F9',
        borderWidth:2
    },
    buttonOutlineText:{
        color:'#0782F9',
        fontWeight:'700',
        fontSize:16
    }


})