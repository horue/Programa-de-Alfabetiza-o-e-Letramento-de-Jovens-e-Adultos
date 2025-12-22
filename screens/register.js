import { Text, SafeAreaView, StyleSheet, TextInput, View, Alert, KeyboardAvoidingView } from 'react-native';
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
    <View style={{borderWidth: 2, borderColor: 'white', overflow: 'hidden', marginLeft: 10, width: 700,}}>
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

const NascimentoInput = () => {
  const [nascimento, setNascimento] = useState('');

  const [form, setForm] = useState({});

  
  const handleInputChange = value => {
    setNascimento(value);
    if (value.length === 8) {
      try {
        const year = parseInt(value.slice(4, 8), 10);
        if (Number.isNaN(year) || year < 1900 || year > 2025) {
          throw new Error('Ano inválido.');
        }

        const month = parseInt(value.slice(2, 4), 10);
        if (Number.isNaN(month) || month < 1 || month > 12) {
          throw new Error('Mês inválido.');
        }

        const day = parseInt(value.slice(0, 2), 10);
        const maxDaysInMonth = new Date(year, month, 0).getDate();
        if (Number.isNaN(day) || day < 1 || day > maxDaysInMonth) {
          throw new Error('Dia inválido.');
        }

        setForm({ dateOfBirth: `${year}-${month}-${day}` });
      } 
      catch (_) {
        alert('Data inválida, tente novamente.');
        setNascimento('');
      }
    }
  };

    return (
      <View style={styles.inputNasc}>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            caretHidden={true}
            keyboardType="number-pad"
            maxLength={8}
            onChangeText={handleInputChange}
            style={styles.inputControl}
            value={nascimento} 
        />

        <View style={styles.inputOverflow}>
          {'DD/MM/AAAA'.split('').map((placeholder, index, arr) => {
            const countDelimiters = arr
              .slice(0, index)
              .filter(char => char === '/').length;

            const indexWithoutDelimeter = index - countDelimiters;
            const current = nascimento[indexWithoutDelimeter];

            return (
              <Text key={index} style={styles.inputChar}>
                {placeholder === '/' || !current ?
                  (<Text style={styles.inputCharEmpty}>{placeholder}</Text>) : 
                  (current)
                }
              </Text>
            );
          }
          )}
        </View>
      </View>
  );
}


export default function RegisterScreen({ selectedValue }) {
  const [cargo, setCargo] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [nascimento, setNascimento] = useState('');
  const senhaHasheada = sha256(cpf);
  const verificarCargo = cargo == 'aluno'? false:true;


  return (
    <KeyboardAvoidingView style={styles.container}>
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
        Matrícula
      </Text>
      <TextInput 
        style={styles.input}
        value={matricula}
        onChangeText={setMatricula}
        editable={verificarCargo}
        keyboardType="numeric">
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
      <NascimentoInput></NascimentoInput>


      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => {nome=='' || cargo==null || cpf==''? (alert('Aviso! \nOs campos "Tipo de Usuário", "Nome" e "CPF" não podem estar vazios.')) : (criarUsuario(nome, cpf, cargo, senhaHasheada, matricula), alert('Sucesso! \nNovo usuário criado com sucesso.')) }}></CustomButton>
    </KeyboardAvoidingView>
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
      margin: 0,
      fontSize: 18,
      fontWeight: 'medium',
      textAlign: 'center',
    },
    common_text: {
      fontSize: 15,
      marginLeft : 10,
      marginBottom: 7,
      color: "#000000",
      textAlign: "left",
    },
    input: {
      borderWidth: 1,
      borderRadius: 18,
      marginLeft : 10,
      borderColor:"#001a33",
      width: 700,
      height: 38,
      padding: 15,
      backgroundColor: "#e0f0ff"
    },

    inputNasc: {
      borderWidth: 1,
      borderRadius: 18,
      marginLeft : 10,
      borderColor:"#001a33",
      width: 700,
      height: 38,
      backgroundColor: "#e0f0ff"
    },
    inputOverflow: {   //Nascimento
      borderRadius: 18,
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      height: 38,
      flexDirection: 'row'
    },
    inputChar: {  //Nascimento
      borderRadius: 18,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      lineHeight: 35,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '600',
    },
    inputCharEmpty: {  //Nascimento
      borderRadius: 18,
      color: '#BBB9BC',
      fontWeight: 'medium',
    },
    inputControl: {  //Nascimento
      borderWidth: 1,
      borderRadius: 18,
      borderColor:"transparent",
      width: 700,
      height: 38,
      position: 'absolute',
      color: 'transparent',
      zIndex: 2
    }
  });
  