//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';



//Chamada da Data
const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"];
const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];


const d = new Date();
const day = d.getDay()+1;
const week = days[d.getDay()]
const month = months[d.getMonth()];


// Componente modelo
export const CustomHeader = ({}) => (
  <Card style={styles.card}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.card}>
            <MaterialIcons name='arrow-left' size={62} color={'white'}/>
        </TouchableOpacity>
        <View>
            <Text style={[styles.text, { fontWeight: 'bold'  }]}>{week}</Text>
            <Text style={[styles.text, { fontWeight: 'bold'  }]}>{day} {month}</Text>
        </View>
        <TouchableOpacity style={styles.card}>
            <MaterialIcons name='arrow-right' size={62} color={'white'}/>
        </TouchableOpacity>
    </View>
  </Card>
);

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#00acbb',
        height: 120,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
    },
    center: {
        fontSize: 14, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
    },
    left: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        alignSelf: 'left', 
    },
});
