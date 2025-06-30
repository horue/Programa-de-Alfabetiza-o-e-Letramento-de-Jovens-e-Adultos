//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useState, useEffect } from 'react';


import { useAppContext } from '../contexts/appcontext';


//Chamada da Data
const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"];
const monthsS = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const months31 = [0, 2, 4, 6, 7, 9, 11]
const months30 = [3, 5, 8, 10]; 


const d = new Date();
const day = d.getDate();
const week = d.getDay()
const month = months[d.getMonth()];
const monthIndex0 = d.getMonth();

function formatarData(dia, mes, ano) {
  const dd = dia < 10 ? `0${dia}` : dia;
  const mm = mes + 1 < 10 ? `0${mes + 1}` : mes + 1; // mes é 0-based, então soma 1
  return `${dd}-${mm}-${ano}`;
}


// Componente modelo
export const CustomHeader = ({}) => {
    const [fDay, setDay] = useState(day);
    const [b, setB] = useState(week);
    const [fWeek, setWeek] = useState(days[b]);
    const [fMonth, setMonth] = useState(monthIndex0);

    const { setDataSelecionada } = useAppContext();
    useEffect(() => {
    const ano = d.getFullYear();
    const dataFormatada = formatarData(fDay, fMonth, ano);
    setDataSelecionada(dataFormatada);
    }, [fDay, fMonth]);



    function increment() {
        const newIndex = (b + 1) % 7;
        setDay(a => a + 1);
        if (fDay >= 31 && months31.includes(fMonth)) {
            setDay(1)
            setMonth(fMonth + 1)
        }
        else if (fDay >= 30 && months30.includes(fMonth)) {
            setDay(1)
            setMonth(fMonth + 1)
        }
        setB(newIndex);
        setWeek(days[newIndex]);
    }

    function decrement() {
        const newIndex = (b - 1 + 7) % 7;
        setDay(a => a - 1);
        if (fDay <= 1 && months31.includes(fMonth)) {
            setDay(30);
            setMonth(fMonth - 1);
        }
        else if (fDay <= 1 && months30.includes(fMonth)) {
            setDay(31);
            setMonth(fMonth - 1);
        }
        setB(newIndex);
        setWeek(days[newIndex]);
    }


  return(
  <Card style={styles.card}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.arrow} onPress={() => decrement()}>
            <MaterialIcons name='chevron-left' size={62} color={'white'}/>
        </TouchableOpacity>
        <View>
            <Text style={[styles.text]}>{fWeek}</Text>
            <Text style={[styles.text, { fontSize: 18  }]}>{fDay < 10 ? (`0${fDay} ${months[fMonth]}`):(`${fDay} ${months[fMonth]}`)}</Text>
        </View>
        <TouchableOpacity style={styles.arrow} onPress={() => increment()}>
            <MaterialIcons name='chevron-right' size={62} color={'white'}/>
        </TouchableOpacity>
    </View>
  </Card>
)};

export const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#00acbb',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
    },
    arrow: {
        backgroundColor: '#00acbb',
        height: 120,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 22,
        width: 100,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});
