import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking} from 'react-native';
import {useState} from 'react';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from './styles.js';

// Universal Consts
const d = new Date();
let hour = d.getHours();




export default function App() {
  const [hyperlink_estado1, mudar_hyperlink1] = useState(true)
  const [hyperlink_estado2, mudar_hyperlink2] = useState(true)



  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
            <Button title="ENTRAR COM EMAIL" icon="">
      </Button>
      <Text style={styles.paragraph}>
      ----------------------- ou -----------------------
      </Text>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={hyperlink_estado1 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink1(prev => !prev);}}>
        Não sei a matrícula
      </Text>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={hyperlink_estado2 ? styles.hyperlink : styles.hyperlink_clicked} onPress={()=>{Linking.openURL('https://example.com').catch(err => console.log(err));mudar_hyperlink2(prev => !prev);}}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <Button title="Entrar">
      </Button>
    </SafeAreaView>
  );
}