import { Text, SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';


// Imports from files
import { CustomButton } from '../components/buttons.js';
import { criarTurma } from '../modules/createClass.js';
import { getUserFunction } from '../modules/getUser.js';


import { pickerStyles } from '../components/pickerstyle.js';


const ProfessorDropdown = ({ onSelect }) => {
    const [selectedProfessor, setSelectedProfessor] = useState(null);
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        const fetchProfessors = async () => {
            const lista = await getUserFunction('professor');
            const profs = lista.map((user) => ({
                label: user.nome,
                value: user.nome,
            }));
            setProfessors(profs);
        };

        fetchProfessors();
    }, []);


    const handleProfessorChange = (value) => {
        setSelectedProfessor(value);
        if (onSelect) {
        onSelect(value);
        }
    };


  return (
    <View style={styles.dropdown}> 
        <RNPickerSelect
            onValueChange={handleProfessorChange}
            items={professors}
            placeholder={{ label: 'Professor', value: null }}
            value={selectedProfessor}
            style={pickerStyles}
        />
    </View>
  );
};


const CampusDropdown = ({ onSelect }) => {
    const [selectedCampus, setSelectedCampus] = useState(null);


    const campus = [
    { label: 'Estácio - Alcântara', value: ['alcantara', 'AC'] },
    { label: 'Estácio - Duque De Caxias', value: ['duque_de_caxias', 'DC'] },
    { label: 'Estácio - Ilha Do Governador', value: ['ilha_do_governador', 'IG'] },
    { label: 'Estácio - Queimados', value: ['queimados', 'QM'] },
    { label: 'Estácio - Nova Iguaçu', value: ['nova_iguacu', 'NI'] },
    { label: 'Estácio - Taquara', value: ['taquara', 'TQ'] },
    { label: 'Estácio - Teresópolis', value: ['teresopolis', 'TR'] },
    { label: 'Estácio - Via Brasil', value: ['via_brasil', 'VB'] },
    { label: 'Estácio - Nova América', value: ['nova_america', 'NA'] },
    ];

    const handleCampusChange = (value) => {
        setSelectedCampus(value);
        if (onSelect) {
        onSelect(value);
        }
    };


  return (
    <View style={styles.dropdown}>
        <RNPickerSelect
            onValueChange={handleCampusChange}
            items={campus}
            placeholder={{ label: 'Campus', value: null }}
            value={selectedCampus}
            style={pickerStyles}
        />
    </View>
  );
};

const ClassTypeDropdown = ({ onSelect }) => {
    const [selectedClassType, setSelectedClassType] = useState(null);


    const campus = [
    { label: 'Alfabetização', value: ['alfabetização', 'A'] },
    { label: 'Letramento', value: ['letramento', 'L'] },

    ];

    const handleClassTypeChange = (value) => {
        setSelectedClassType(value);
        if (onSelect) {
        onSelect(value);
        }
    };


  return (
    <View style={styles.dropdown}>
        <RNPickerSelect
            onValueChange={handleClassTypeChange}
            items={campus}
            placeholder={{ label: 'Tipo de Turma', value: null }}
            value={selectedClassType}
            style={pickerStyles}
        />
    </View>
  );
};



export default function CreateClassScreen({ selectedCampus, selectedProfessor, selectedClassType }) {
    const [campus, setCampus] = useState(selectedCampus);
    const [professor, setProfessor] = useState(selectedProfessor)
    const [classType, setClassType] = useState(selectedClassType)



  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
            Criar uma nova turma
        </Text >
        <CampusDropdown onSelect={setCampus}/>
        <ClassTypeDropdown onSelect={setClassType}></ClassTypeDropdown>
        <ProfessorDropdown onSelect={setProfessor}/>
        <CustomButton buttonText='Criar nova turma' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => {professor == null || campus == null ? Alert.alert('Aviso!','Você deve escolher um campus e um professor para criar uma nova turma.') : (criarTurma(campus[0], professor, campus[1], classType[0], classType[1]), Alert.alert('Sucesso!', "Turma criada com sucesso."))}}></CustomButton>
    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 20,
      gap: 26,
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
    dropdown: {
      marginTop: 20,
      alignSelf: 'center',
      borderWidth: 2, 
      borderColor: 'white', 
      overflow: 'hidden', 
      width: 800,
      backgroundColor: '#ecf0f1',
    },
  });
  