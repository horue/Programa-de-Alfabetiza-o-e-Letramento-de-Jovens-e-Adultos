import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View} from 'react-native';
import {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { CustomButton } from '../components/buttons.js';


const TypeDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { label: 'Aluno', value: 'aluno' },
    { label: 'Professor', value: 'professor' },
    { label: 'Monitor', value: 'monitor' },
    { label: 'Administrador', value: 'administrador' },
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={options}
        placeholder={{ label: 'Tipo de Usuário', value: null }}
        value={selectedValue}
      />
    </View>
  );
};



export default function RegisterScreen({ onLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Adicionar novo usuário{'\n'}{'\n'}
      </Text >
      <TypeDropdown></TypeDropdown>


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
        CPF
      </Text>
      <TextInput style={styles.input}  keyboardType="numeric">
      </TextInput>


      <Text style={styles.common_text}>
        Data de Nascimento
      </Text>
      <TextInput style={styles.input}>
      </TextInput>

      
      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onLogin}></CustomButton>
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
  });
  