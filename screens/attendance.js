//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { full_options } from '../components/options';
import { alunos } from '../components/test';
import { CustomButton } from '../components/buttons';

import { getStudentsFromClass } from '../modules/getstudentsclass';



// Componente modelo
export const AttendanceComponent = ({ nome, matricula, aberto, onPress }) => {
    const [isChecked, setCheck] = useState(true);
    const [isCheckedIcon, setCheckedIcon] = useState(true)
    const unchecked = '#ff4545';
    const checked = '#5efa50';
    const uncheckedBorder = 'red';
    const checkedBorder = '#5efa50';
    const uncheckedIcon = 'close';
    const checkedIcon = 'check';
    const boxColor = isChecked ? checked && checkedBorder : unchecked && uncheckedBorder;
    const finalIcon = isCheckedIcon ? checkedIcon : uncheckedIcon;


    const checkHandler = () => {     
        setCheck(!isChecked)
        setCheckedIcon(!isCheckedIcon)   
    }



  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ gap: 16 }}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.matricula}>{matricula}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: boxColor,height: 40,width: 40,borderRadius: 15,left: '85%',position: 'absolute', borderColor: boxColor, borderWidth: 2}}
          onPress={checkHandler}>
            <MaterialIcons name={finalIcon} style={{position: 'absolute', alignContent: 'center', alignSelf: 'center', verticalAlign: 'middle', alignItems: 'center', opacity: 0.7}} size={36} color={'white'}></MaterialIcons>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const alunosOrdenados = [...alunos].sort((a, b) => {
    return a.nome.localeCompare(b.nome, undefined, { sensitivity: 'base' });
  });

export function AttendanceScreen({onExit}) {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const carregarAlunos = async () => {
      const lista = await getStudentsFromClass('IG202561');
      setAlunos(lista);
    };
    carregarAlunos();
  }, []);

  return(
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', gap: 4 }}>
    {[...alunos].sort((a, b) => (
        a.nome.localeCompare(b.nome, undefined, { sensitivity: 'base' })
    )).map((item) => (
        <AttendanceComponent
            key={item.matricula}
            nome={item.nome}
            matricula={item.matricula}
        />
    ))}
    <CustomButton buttonText={'Confirmar'} buttonColor={'#00acbb'} textColor={'white'}></CustomButton>
    <Text>{'\n'}</Text>
    </ScrollView>
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
    nome: { fontSize: 16, fontWeight: 'bold'},
    matricula: { fontSize: 16, fontWeight: 'normal' },
});

