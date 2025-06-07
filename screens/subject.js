import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';


// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { CustomButton } from '../components/buttons.js';
import { subject_options } from '../components/methods.js';

export const CardOptions = ({ icon, option, aberto, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </TouchableOpacity>
);

const pickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: true,
    type: '*/*', // ou 'application/pdf', 'image/*' etc.
  });

  if (result.canceled) {
    console.log('Usuário cancelou');
    return;
  }

  const file = result.assets[0];
  console.log('Arquivo selecionado:', file);
};


export default function SubjectScreen({ onLogin }) {
  const [nome, setNome] = useState('');
  const functionMap = {
    pickDocument,
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
            Aula do dia:{' n° dia'}{' mes'}{'\n'}{'\n'}
        </Text >

        <Text style={styles.common_text}>
            Título da Aula
        </Text>
        <TextInput 
            style={styles.input}
            value={nome}
            onChangeText={setNome}>
        </TextInput>

        {subject_options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
            onPress={() => functionMap[item.function]()} 
        />
        ))}

      <CustomButton buttonText='Salvar' textAlign='center' textColor='white' buttonColor='#00acbb'></CustomButton>
    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 20,
      gap: 12,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'medium',
      textAlign: 'center',
    },
    common_text: {
      fontSize: 15,
      marginBottom: 7,
      color: "#000000",
      textAlign: "left",
    },
    input: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor:"#001a33",
      height: 38,
      backgroundColor: "#e0f0ff"
    },
      card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
    },
  });
  