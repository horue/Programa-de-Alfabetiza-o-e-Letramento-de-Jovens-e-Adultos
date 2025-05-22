import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';


// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from '../styles.js';
import { CustomButton } from '../components/buttons.js';
import { firebaseAuth } from '../firebase/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';

// Universal Consts
const d = new Date();
let hour = d.getHours();

export default function LoginEmailScreen({}) {
    const [hyperlink_estado2, mudar_hyperlink2] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
      try {
        const user = await signInWithEmailAndPassword(firebaseAuth, email, password)
        alert("Logado com sucesso");
      } 
      catch (err) {
        console.log(err.message)
        alert("Erro no Login: " + err.message);
      }
    }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text>
      <Text style={styles.common_text}>
        Email
      </Text>
      <TextInput style={[styles.input, { marginBottom: 20 }]} value={email} onChangeText={setEmail}>
      </TextInput>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input} secureTextEntry= {true} value={password} onChangeText={setPassword}>
      </TextInput>
      <Text style={hyperlink_estado2 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink2(prev => false);}}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <CustomButton buttonText='Entrar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={signIn}></CustomButton>
    </SafeAreaView>
  );
}