import { Text, SafeAreaView, StyleSheet, TextInput, View, Alert } from 'react-native';
import {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';




// Imports from files
import { CustomButton } from '../components/buttons.js';
import { criarUsuario } from '../modules/createUser.js';
import { pickerStyles } from '../components/pickerstyle.js';

import { sha256 } from 'js-sha256';



const TypeDropdown = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { label: 'Aluno', value: 'aluno' },
    { label: 'Professor', value: 'professor' },
    { label: 'Monitor', value: 'monitor' },
    { label: 'Administrador', value: 'administrador' },
  ];

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <View style={{borderRadius: 20, borderWidth: 2, borderColor: 'white', overflow: 'hidden'}}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={options}
        placeholder={{ label: 'Tipo de Usuário', value: null }}
        value={selectedValue}
        style={pickerStyles}
      />
    </View>
  );
};


export default function RegisterScreen({ selectedValue }) {
  const [cargo, setCargo] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const senhaHasheada = sha256(cpf);


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Adicionar novo usuário{'\n'}{'\n'}
      </Text >
      <TypeDropdown onSelect={setCargo} />



      <Text style={styles.common_text}>
        Nome Completo
      </Text>
      <TextInput 
        style={styles.input}
        value={nome}
        onChangeText={setNome}>
      </TextInput>


      <Text style={styles.common_text}>
        Email
      </Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}>
      </TextInput>


      <Text style={styles.common_text}>
        CPF
      </Text>
      <TextInput style={styles.input}
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}>
      </TextInput>


      <Text style={styles.common_text}>
        Data de Nascimento
      </Text>
      <TextInput style={styles.input}
        value={nascimento}
        onChangeText={setNascimento}>
      </TextInput>


      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => {nome=='' || cargo==null || cpf==''? (Alert.alert('Aviso!', 'Os campos "Tipo de Usuário", "Nome" e "CPF" não podem estar vazios.')) : (criarUsuario(nome, cpf, cargo, senhaHasheada), Alert.alert('Sucesso!', 'Novo usuário criado com sucesso.')) }}></CustomButton>
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
  