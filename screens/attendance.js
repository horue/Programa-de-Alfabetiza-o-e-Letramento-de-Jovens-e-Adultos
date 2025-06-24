//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { full_options } from '../components/options';
import { alunos } from '../components/test';



// Componente modelo
export const AttendanceComponent = ({ nome, matricula, aberto, onPress }) => {
    const [isChecked, setCheck] = useState(false);
    const [isCheckedIcon, setCheckedIcon] = useState(false)
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
    <View style={styles.card} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ gap: 16 }}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.matricula}>{matricula}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: boxColor,height: 40,width: 40,borderRadius: 15,left: '85%',position: 'absolute', borderColor: boxColor, borderWidth: 2}}
          onPress={checkHandler}>
            <MaterialIcons name={finalIcon} style={{position: 'absolute', alignContent: 'center', alignSelf: 'center', verticalAlign: 'middle', alignItems: 'center', opacity: 0.9}} size={36} color={'white'}></MaterialIcons>
          </TouchableOpacity>
      </View>
    </View>
  );
};


export function AttendanceScreen({onExit}) {
  return(
    <ScrollView style={styles.container}>
    {alunos.map((item) => (
        <AttendanceComponent
            key={item.id}
            nome={item.nome}
            matricula={item.matrícula}
        />
        ))}
    </ScrollView>
  )
};



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
   },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8
    },
    nome: { fontSize: 16, fontWeight: 'bold'},
    matricula: { fontSize: 16, fontWeight: 'light' },
});

