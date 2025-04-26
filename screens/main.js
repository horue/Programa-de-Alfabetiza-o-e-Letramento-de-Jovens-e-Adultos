import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import options  from '../components/options';


// Componente modelo
export const CardOptions = ({ icon, option}) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </View>
);

// Main Component
export function MainScreen() {
    return(
        <View style={styles.container}>
        {options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
        />
        ))}
    </View>
    )
};


export const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  nome: { fontSize: 16, fontWeight: 'bold', paddingTop: 12, },
});

