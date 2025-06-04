//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useState } from 'react';




//Chamada da Data
const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"];
const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];


const d = new Date();
const day = d.getDate();
const week = d.getDay()
const month = months[d.getMonth()];


// Componente modelo
export const CustomHeader = ({}) => {
    const [fDay, setDay] = useState(day);
    const [b, setB] = useState(week);
    const [fWeek, setWeek] = useState(days[b]);


    function increment() {
        const newIndex = (b + 1) % 7;
        setDay(a => a + 1);
        if (fDay >= 31) {
            setDay(1)
        }
        setB(newIndex);
        setWeek(days[newIndex]);
    }

    function decrement() {
        const newIndex = (b - 1 + 7) % 7;
        setDay(a => a - 1);
        if (fDay <= 1) {
            setDay(31)
        }
        setB(newIndex);
        if (b >= 7) {
            setB(1)
        }
        setWeek(days[newIndex]);
    }

  return(
  <Card style={styles.card}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.arrow} onPress={() => decrement()}>
            <MaterialIcons name='arrow-left' size={62} color={'white'}/>
        </TouchableOpacity>
        <View>
            <Text style={[styles.text, { fontWeight: 'bold'  }]}>{fWeek}</Text>
            <Text style={[styles.text, { fontWeight: 'bold'  }]}>{fDay} {month}</Text>
        </View>
        <TouchableOpacity style={styles.arrow} onPress={() => increment()}>
            <MaterialIcons name='arrow-right' size={62} color={'white'}/>
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
    },
    arrow: {
        backgroundColor: '#00acbb',
        height: 120,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        alignSelf: 'center',
    },
});
