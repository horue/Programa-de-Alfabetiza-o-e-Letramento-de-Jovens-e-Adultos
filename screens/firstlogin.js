import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from '../styles.js';
import { CustomButton } from '../components/buttons.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();



export default function FirstLogin({ onLogin }) {
    const [hyperlink_estado1, mudar_hyperlink1] = useState(true)
    const [hyperlink_estado2, mudar_hyperlink2] = useState(true)



  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>Detectamos que é a sua primeira vez realizando o login. Por favor, defina uma nova senha antes de continuar.{'\n'}Isso não acontecerá das próximas vezes que você entrar.</Text>
      <Text style={styles.paragraph}>
      ----------------------------------------------
      </Text>
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
    </SafeAreaView>
  );
}