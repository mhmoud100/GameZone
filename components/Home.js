import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
export default function Home({ navigation }) {
    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <Text style={styles.btntext}>If you have account press here To login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                <Text style={styles.btntext}>If you dont have account press here to register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      backgroundColor: '#36485f',
      paddingLeft: 60,
      paddingRight: 60,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',

    }
  })
