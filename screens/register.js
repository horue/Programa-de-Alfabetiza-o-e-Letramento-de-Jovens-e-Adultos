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



export default function RegisterScreen({ onLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph}>
        Adicionar novo usuário{'\n'}{'\n'}
      </Text >
      <Text style={styles.common_text}>
        Nome Completo
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.common_text}>
        Email
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onLogin}></CustomButton>
    </SafeAreaView>
  );
}