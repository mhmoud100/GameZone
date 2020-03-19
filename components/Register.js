import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
export default function Register({ navigation }) {
    return (
        <View style={styles.container}>
        <View style={styles.register}>
            <Text style={styles.header}>Registration</Text>

            <TextInput style= {styles.TextInput} placeholder="Your name"
            underlineColorAndroid={'transparent'} />
            <TextInput style= {styles.TextInput} placeholder="Your email"
            underlineColorAndroid={'transparent'} />
            <TextInput style= {styles.TextInput} placeholder="Your password"
           secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <TouchableOpacity style= {styles.button}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntext}>if you already have an account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btntext}>Go back to Home</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    register: {
      alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
    },
    TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom:30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',

    },
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60,
      }
  });
