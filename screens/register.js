import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View} from 'react-native';
import {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';

// Imports from npm
import { Card } from 'react-native-paper';

// Imports from files
import { CustomButton } from '../components/buttons.js';
import { handleRegister } from '../modules/createUser.js';
import { firebaseApp, firebaseAuth, firestore } from '../firebase/firebaseConfig.js';
import {getFirestore, setDoc, doc} from "firebase/firestore";
//import { signUp } from '../firebase/firestore.js';


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
      <View style={styles.input}>
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

export default function RegisterScreen({nascimento, setNascimento}) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');


  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, cpf)
      const user = firebaseAuth.currentUser;
      alert("Registrado com sucesso");
      if (user) {
        await setDoc(doc(firestore, "Users", user.uid)), {
          nome: user.nome,
          sobrenome: user.sobrenome,
          email: user.email,
          cpf: user.cpf,
          nascimento: user.nascimento
        }
      }
    } 
    catch (err) {
      console.log(err.message)
      alert("Erro no Registro: " + err.message);
    }
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Adicionar novo usuário{'\n'}{'\n'}
      </Text >
      <TypeDropdown></TypeDropdown>


      <Text style={styles.common_text}>
        Nome
      </Text>
      <TextInput 
        style={styles.input}
        value={nome}
        onChangeText={setNome}>
      </TextInput>


      <Text style={styles.common_text}>
        Sobrenome
      </Text>
      <TextInput 
        style={styles.input}
        value={sobrenome}
        onChangeText={setSobrenome}>
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

      <CustomButton buttonText='Adicionar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={signUp}></CustomButton>
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
    inputOverflow: {
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      flexDirection: 'row'
    },
    inputChar: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      lineHeight: 35,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '600',
    },
    inputCharEmpty: {
      color: '#BBB9BC',
      fontWeight: 'medium',
    },
    inputControl: {
      borderWidth: 1,
      borderRadius: 180,
      height: 38,
      color: 'transparent',
      borderColor: '#C9D3DB',
      borderStyle: 'solid',
      zIndex: 2
    }
  });
  