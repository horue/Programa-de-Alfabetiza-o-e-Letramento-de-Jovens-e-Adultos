import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { CustomButton } from '../components/buttons.js';
import { toggleFirstLogin } from '../modules/firstLoginToggle.js';
import { useAppContext } from '../contexts/appcontext';


// Universal Consts
const d = new Date();
let hour = d.getHours();



export default function FirstLogin({ onLogin }) {
    const { usuario } = useAppContext();


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>Detectamos que é a sua primeira vez realizando o login. Por favor, defina uma nova senha antes de continuar.{'\n'}Isso não acontecerá das próximas vezes que você entrar.{'\n'}Caso você não altere sua senha, ela continuará como a senha padrão.</Text>
      <View style={{gap: 24}}>
            <Text style={styles.common_text}>
                Nova Senha
            </Text>
            <TextInput style={styles.input}>
            </TextInput>
            <Text style={styles.common_text}>
                Confirme a senha
            </Text>
            <TextInput style={styles.input} secureTextEntry={true}>
            </TextInput>
            <CustomButton buttonText='Alterar senha' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onLogin}></CustomButton>
            <CustomButton buttonText='Pular' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => {toggleFirstLogin(usuario.matricula) ; onLogin()}}></CustomButton>
        </View>
    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 26,
    },
    paragraph: {
      margin: 24,
      fontSize: 12,
      textAlign: 'center',
    },
    common_text: {
      fontSize: 15,
      color: "#000000",
      textAlign: "left",
    },
    hyperlink:{
      fontSize: 14,
      margin: 7,
      color: "#0000ff",
      textAlign: "right",
    },
    hyperlink_clicked:{
      fontSize: 14,
      margin: 7,
      color: "#000080",
      textAlign: "right",
      textDecorationLine: 'underline',
    },
    input: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor:"#001a33",
      height: 38,
      backgroundColor: "#e0f0ff"
    },
      logo: {
      height: 100,
      width: 346,
      resizeMode: "contain",
      justifyContent: 'center',
      position: 'center',
      alignSelf: 'center',
    },
  });
  