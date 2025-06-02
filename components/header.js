//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



//Chamada da Data
const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTRUBRO", "NOVEMBRO", "DEZEMBRO"];
const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];


const d = new Date();
const day = d.getDay();
const week = days[d.getDay()]
const month = months[d.getMonth()];


// Componente modelo
export const CustomHeader = ({}) => (
  <TouchableOpacity style={styles.card}>
    <Text style={[styles.text, { fontWeight: 'bold'  }]}>{week}</Text>
    <Text style={[styles.text, { fontWeight: 'bold'  }]}>{day} {month}</Text>
  </TouchableOpacity>
);

// Main Component
export const styles = StyleSheet.create({
    card: {
        height: 120,
        width: '100%',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
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
