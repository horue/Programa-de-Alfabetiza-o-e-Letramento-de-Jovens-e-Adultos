import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';

// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from '../styles.js';
import { CustomButton } from '../components/buttons.js';
import LoginEmailScreen from './loginEmail.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();



export default function LoginScreen({ onLogin }) {
    const [hyperlink_estado1, mudar_hyperlink1] = useState(true)
    const [hyperlink_estado2, mudar_hyperlink2] = useState(true)



  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
      <CustomButton buttonText='Entrar com email' textAlign='center' textColor='white' buttonColor='#00acbb'> onPress={} </CustomButton>
      <Text style={styles.paragraph}>
      ----------------------- ou -----------------------
      </Text>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={hyperlink_estado1 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink1(prev => false);}}>
        Não sei a matrícula
      </Text>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input} secureTextEntry={true}>
      </TextInput>
      <Text style={hyperlink_estado2 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink2(prev => false);}}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <CustomButton buttonText='Entrar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onLogin}></CustomButton>
    </SafeAreaView>
  );
}