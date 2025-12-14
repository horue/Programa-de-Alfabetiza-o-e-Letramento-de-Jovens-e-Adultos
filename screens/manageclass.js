//Imports React
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';




import { getStudentsFromClass } from '../modules/getstudentsclass';
import { getClass } from '../modules/getClass';


import { pickerStyles } from '../components/pickerstyle';

import { removeFromClass } from '../modules/removeFromClass';


// Componente modelo
export const AttendanceComponent = ({ nome, matricula, onToggle, onDelete }) => {
    const unchecked = '#ff4545';
    const uncheckedBorder = 'red';
    const uncheckedIcon = 'do-not-disturb-on';
    const boxColor = unchecked && uncheckedBorder;
    const finalIcon = uncheckedIcon;


    const checkHandler = () => {     
      onToggle();  
    }



  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ gap: 16 }}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.matricula}>Matrícula: {matricula}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: boxColor,height: 40,width: 40,borderRadius: 15,left: '85%',position: 'absolute', borderColor: boxColor, borderWidth: 2}}
          onPress={onDelete}>
            <MaterialIcons name={finalIcon} style={{position: 'absolute', alignContent: 'center', alignSelf: 'center', verticalAlign: 'middle', alignItems: 'center', opacity: 0.7}} size={36} color={'white'}></MaterialIcons>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const ClassDropdown = ({ onSelect }) => {
    const [selectedClass, setSelectedClass] = useState('');
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
    <View style={styles.dropdown}>
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


export function ClassManagementScreen({selectedClass}) {
  const [alunos, setAlunos] = useState([]);
  const [selectedClassCode, setSelectedClassCode] = useState(selectedClass);
  const [presencas, setPresencas] = useState({});


  useEffect(() => {
    const carregarAlunos = async () => {
      const lista = await getStudentsFromClass(selectedClassCode);
      setAlunos(lista);

      const presencasInit = {};
      lista.forEach(aluno => {
        presencasInit[aluno.matricula] = true;
      });
      setPresencas(presencasInit);
    };
    carregarAlunos();
  }, [selectedClassCode]);

  return(
    <>
      <View>         
        <ClassDropdown onSelect={setSelectedClassCode}/>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', gap: 4 }}>
        {[...alunos].sort((a, b) => (
            a.nome.localeCompare(b.nome, undefined, { sensitivity: 'base' })
        )).map((item) => (
          <AttendanceComponent
            key={item.matricula}
            nome={item.nome}
            matricula={item.matricula}
            isChecked={presencas[item.matricula]}
            onDelete={async () => {
                await removeFromClass(selectedClassCode, item.matricula);
                setAlunos(prev => prev.filter(aluno => aluno.matricula !== item.matricula));
            }}
          />
        ))}
        <Text>{'\n'}</Text>
      </ScrollView>
    </>
  )
};



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 20,
   },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        width: '90%',
    },
    nome: { fontSize: 17, fontWeight: 'bold'},
    matricula: { fontSize: 16, fontWeight: 'normal' },

    dropdown: {
      marginTop: 50,
      alignSelf: 'center',
      borderWidth: 2, 
      borderColor: 'white', 
      overflow: 'hidden', 
      width: 800,
      backgroundColor: '#ecf0f1',
    },
});

