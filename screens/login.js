import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, Alert} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from '../styles.js';
import { CustomButton } from '../components/buttons.js';
import { loginUser } from '../modules/loginUser.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();



export default function LoginScreen({ onLogin }) {
    const [hyperlink_estado1, mudar_hyperlink1] = useState(true)
    const [hyperlink_estado2, mudar_hyperlink2] = useState(true)
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const loginHandler = async () => {
      const resultado = await loginUser(matricula, senha);

      if (resultado.success) {
        if (onLogin) onLogin(resultado.usuario); // passa o usuário completo
      } else {
        Alert.alert("Erro", resultado.error);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
      <CustomButton buttonText='Entrar com email' textAlign='center' textColor='white' buttonColor='#00acbb'></CustomButton>
      <Text style={styles.paragraph}>
      ----------------------- ou -----------------------
      </Text>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input} value={matricula} onChangeText={setMatricula}> 
      </TextInput>
      <Text style={hyperlink_estado1 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink1(prev => false);}}>
        Não sei a matrícula
      </Text>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={setSenha}>
      </TextInput>
      <Text style={hyperlink_estado2 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink2(prev => false);}}>
        Primeiro login
      </Text>
      <CustomButton buttonText='Entrar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={loginHandler}></CustomButton>
    </SafeAreaView>
  );
}