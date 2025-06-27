import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { pickerStyles } from '../components/pickerstyle.js';

// NOTA IMPORTANTE: O FIREBASE STORAGE REQUER UM PLANO PAGO PARA A UTILIZAÇÃO, ISSO IMPEDIU O PROJETO DE SER FINALIZADO. ENTRETANTO, O CONTEÚDO, POR TEXTO, PODE SER SALVO NO BANCO DE DADOS

// Imports from files
import { CustomButton } from '../components/buttons.js';
import { subject_options } from '../components/methods.js';
import { useAppContext } from '../contexts/appcontext';
import { useEffect } from 'react';
import { getClass } from '../modules/getClass.js';
import { saveSubject } from '../modules/addSubject.js';

const ClassDropdown = ({ onSelect }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [classes, setClasses] = useState([]);
    const { usuario } = useAppContext();


    useEffect(() => {
        const fetchClasses = async () => {
            const lista = await getClass(usuario.cargo, usuario.nome);
            const classesFormatted = lista.map((turma) => ({
                label: `${turma.codigo} - ${turma.professor}`,
                value: turma.codigo,
            }));
            setClasses(classesFormatted);
        };

        fetchClasses();
    }, []);


    const handleClassChange = (value) => {
        setSelectedClass(value);
        if (onSelect) {
        onSelect(value);
        }
    };


  return (
    <View style={{borderWidth: 2, borderColor: 'white', overflow: 'hidden', width: 'fill', backgroundColor: 'white'}}>
        <RNPickerSelect
            onValueChange={handleClassChange}
            items={classes}
            placeholder={{ label: 'Turma', value: null }}
            value={selectedClass}
            style={pickerStyles}
        />
    </View>
  );
};


export const CardOptions = ({ icon, option, onPress}) => (
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

const openCamera = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') {
    alert('Permissão para usar a câmera negada!');
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: false,
    quality: 1,
  });

  if (!result.canceled) {
    const photo = result.assets[0];
    console.log('Foto tirada:', photo.uri);
  }
};


export default function SubjectScreen({ selectedClass }) {
  const [nome, setNome] = useState('');
  const [selectedClassCode, setSelectedClassCode] = useState(selectedClass);
  const { dataSelecionada } = useAppContext();
  const functionMap = {
    pickDocument,
    openCamera,
  };

  return (
    <>
    <ClassDropdown onSelect={setSelectedClassCode}></ClassDropdown>
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
            Aula do dia {dataSelecionada}
        </Text >

        <Text style={styles.common_text}>
            Conteúdo da Aula
        </Text>
        <TextInput 
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            multiline={true}
            >
        </TextInput>

        {subject_options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
            onPress={() => functionMap[item.function]()} 
        />
        ))}

      <CustomButton buttonText='Salvar' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => { selectedClassCode == null ? (Alert.alert('Aviso!', 'Nenhuma turma foi selecionada.')) : (saveSubject(selectedClassCode, dataSelecionada, nome), Alert.alert('Sucesso!', 'Conteúdo salvo com sucesso.'))}}></CustomButton>
    </SafeAreaView>
    </>
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
      height: 96,
      backgroundColor: "#e0f0ff"
    },
      card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
    },
  });
  