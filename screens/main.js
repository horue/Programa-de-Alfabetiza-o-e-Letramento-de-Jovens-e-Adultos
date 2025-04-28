//Imports React
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


//Imoprts Locais
import options  from '../components/options';

const Tab = createBottomTabNavigator();


// Componente modelo
export const CardOptions = ({ icon, option}) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </View>
);

// Main Component
export function OptionsScreen({onExit}) {
    return(
        <ScrollView style={styles.container}>
        {options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
        />
        ))}
    </ScrollView>
    )
};

export function ProfileScreen({onExit}) {
  return(
      <ScrollView style={styles.container}>
        <Button title="Sair" color={'#00acbb'} onPress={onExit}/>
      </ScrollView>
  )
};

export function MainScreen({onExit}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Opções" component={OptionsScreen}/>
        <Tab.Screen name="Perfil">
          {() => <ProfileScreen onExit={onExit} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


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

