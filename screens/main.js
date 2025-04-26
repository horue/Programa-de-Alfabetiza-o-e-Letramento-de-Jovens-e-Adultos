//Imports React
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


//Imoprts Locais
import options  from '../components/options';


// Componente modelo
export const CardOptions = ({ icon, option}) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </View>
);

// Main Component
export function MainScreen({onExit}) {
    return(
        <View style={styles.container}>
        {options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
        />
        ))}
    <Button title="Sair" color={'#00acbb'} onPress={onExit}/>
    </View>
    )
};


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 180,
    padding: 20,
   },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  nome: { fontSize: 16, fontWeight: 'bold', paddingTop: 12, },
});

