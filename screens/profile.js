//Imports React
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


//Imoprts Locais


export function ProfileScreen({onExit}) {
  return(
      <ScrollView style={styles.container}>
        <Button title="Sair" color={'#00acbb'} onPress={onExit}/>
      </ScrollView>
  )
};


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop: 120,
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
  
  