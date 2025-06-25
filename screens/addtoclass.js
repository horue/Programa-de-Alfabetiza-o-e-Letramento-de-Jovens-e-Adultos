import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Linking, View, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';

// Imports from files
import { CustomButton } from '../components/buttons.js';
import { criarTurma } from '../modules/createClass.js';
import { getClass } from '../modules/getClass.js';

import { getUserFunction } from '../modules/getUser.js';
import { addStudentToClass } from '../modules/addUserClass.js';

const StudentDropdown = ({ onSelect }) => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const lista = await getUserFunction('aluno');
            const studentsFormatted = lista.map((user) => ({
                label: user.nome,
                value: user.matricula,
            }));
            setStudents(studentsFormatted);
        };

        fetchStudents();
    }, []);


    const handleStudentChange = (value) => {
        setSelectedStudent(value);
        if (onSelect) {
        onSelect(value);
        }
    };


  return (
    <View>
        <RNPickerSelect
            onValueChange={handleStudentChange}
            items={students}
            placeholder={{ label: 'Aluno', value: null }}
            value={selectedStudent}
        />
    </View>
  );
};


const ClassDropdown = ({ onSelect }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const lista = await getClass();
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
    <View>
        <RNPickerSelect
            onValueChange={handleClassChange}
            items={classes}
            placeholder={{ label: 'Turma', value: null }}
            value={selectedClass}
        />
    </View>
  );
};

export default function AddToClass({ selectedCampus, selectedStudent }) {
  const [selectedClassCode, setSelectedClassCode] = useState(selectedCampus);
  const [selectedStudentName, setSelectedStudentName] = useState(selectedStudent)


  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>
            Adicionar um aluno à uma turma
        </Text >
        <ClassDropdown onSelect={setSelectedClassCode}/>
        <StudentDropdown onSelect={setSelectedStudentName}/>
        <CustomButton buttonText='Adicionar Aluno à turma' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={() => addStudentToClass(selectedClassCode, selectedStudentName)}></CustomButton>
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
  