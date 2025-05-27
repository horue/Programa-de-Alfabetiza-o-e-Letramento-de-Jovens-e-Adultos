//Imports React
import { View, Text, StyleSheet, Button, ScrollView, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseAuth } from '../firebase/firebaseConfig.js';
import { getAuth } from 'firebase/auth';


//Imoprts Locais
import { CustomButton } from '../components/buttons';
import { TwoColumnCard } from '../components/twocolumn';

export function ProfileScreen({onExit}) {
  getAuth().onAuthStateChanged((user) => {
    if (!user) onExit();
  });

  return(
      <ScrollView style={styles.container}>
        <TwoColumnCard nomeCompleto={'Jorge Magno Reis Vidal Filho'}></TwoColumnCard>
        <CustomButton buttonText='Sair' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => firebaseAuth.signOut()} ></CustomButton>
        <Image style={styles.logo} source={require('../assets/estacio-logo.png')} />
        <Text style={styles.info_text}>As informações presentes podem ser validadas mediante apresentação de documento com foto.</Text>
      </ScrollView>
  )
};


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop: 120,
      padding: 20,
      marginBottom: 30,
     },
    card: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8
    },
    nome: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      paddingTop: 12, 
    },
    logo: {
      margin: 29,
      height: '18%',
      resizeMode: "contain",
      justifyContent: 'center',
      position: 'center',
      alignSelf: 'center',
    },
    info_text:{
      fontSize: 14,
      color: "#000000",
      opacity: 0.6,
      textAlign: "center",
      alignSelf: "center"
    }
  });
  
  