import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View} from 'react-native';
import {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';



// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { styles } from '../styles.js';
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
        placeholder={{ label: 'Selecione...', value: null }}
        value={selectedValue}
      />
    </View>
  );
};



export default function RegisterScreen({ onLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
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
      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onLogin}></CustomButton>
    </SafeAreaView>
  );
}