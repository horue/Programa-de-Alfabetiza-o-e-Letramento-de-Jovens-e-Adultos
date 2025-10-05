//Imports React
import { View, Text, StyleSheet, Alert, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';


import { CustomButton } from '../components/buttons';

import { getStudentsFromClass } from '../modules/getstudentsclass';
import { getClass } from '../modules/getClass';

import { saveAttendance } from '../modules/addAttendance';

import { pickerStyles } from '../components/pickerstyle';
import { useAppContext } from '../contexts/appcontext';
import { CustomHeader } from '../components/header';

import { getAttendance } from '../modules/getAttendance';


// Componente modelo
export const AttendanceComponent = ({ nome, matricula, isChecked, onToggle }) => {
    const falta = '#ff4545';
    const checked = '#5efa50';
    const abono = '#5078faff'
    const faltaBorder = 'red';
    const presenteBorder = '#5efa50';
    const abonoBorder = 'blue'
    const faltaIcon = 'close';
    const presenteIcon = 'check';
    const abonoIcon = 'task-alt'
    const boxColor = isChecked === 1 ? checked && presenteBorder : isChecked === 0 ? falta && faltaBorder : abono && abonoBorder;
    const finalIcon = isChecked === 0 ? faltaIcon : isChecked === 1 ? presenteIcon : abonoIcon;


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
        <TouchableOpacity style={{backgroundColor: boxColor,height: 46,width: 46,borderRadius: 15,left: '85%',position: 'absolute', borderColor: boxColor, borderWidth: 2}}
          onPress={checkHandler}>
            <MaterialIcons name={finalIcon} style={{position: 'absolute', alignContent: 'center', alignSelf: 'center', verticalAlign: 'middle', alignItems: 'center', opacity: 0.7, top: '8%', left: '8%'}} size={34} color={'white'}></MaterialIcons>
          </TouchableOpacity>
      </View>
    </View>
  );
};

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


export function AttendanceScreen({selectedClass}) {
  const [alunos, setAlunos] = useState([]);
  const [selectedClassCode, setSelectedClassCode] = useState(selectedClass);
  const [presencas, setPresencas] = useState({});
  const { dataSelecionada } = useAppContext();



  useEffect(() => {
    if (!selectedClassCode) return;
    (async () => {
      const lista = await getStudentsFromClass(selectedClassCode);
      setAlunos(lista);

      const dataStr = typeof dataSelecionada === 'string'
        ? dataSelecionada
        : dataSelecionada.toISOString().split('T')[0];

      const presencasSalvas = await getAttendance(selectedClassCode, dataStr);

      setPresencas(
        presencasSalvas && Object.keys(presencasSalvas).length > 0
          ? presencasSalvas
          : Object.fromEntries(lista.map(a => [a.matricula, true]))
      );
    })();
  }, [selectedClassCode, dataSelecionada]);


  return(
    <>
      <View>         
        <ClassDropdown onSelect={setSelectedClassCode}/>
      </View>
      <View>
        <Text style={styles.paragraph}>Chamada do Dia: {dataSelecionada}</Text>
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
            onToggle={() => {
              setPresencas(prev => ({
                ...prev,
                [item.matricula]: (prev[item.matricula] + 1) % 3,
              }));
            }}
          />
        ))}
        <Text>{'\n'}</Text>
        <CustomButton buttonText={'Salvar'} buttonColor={'#00acbb'} textColor={'white'}  styles={{width: 180}}onPress={() => {selectedClassCode == null? Alert.alert('Aviso!', 'Nenhuma tumrma selecionada.') : (saveAttendance(selectedClassCode, dataSelecionada, presencas), Alert.alert('Sucesso!','Lista de presença salva com sucesso.'))}}></CustomButton>
        <Text>{'\n'}</Text>
      </ScrollView>
    </>
  )
};



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
   },
  paragraph: {
      margin: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
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
});

