//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';



//Imoprts Locais
import options  from '../components/options';
import { ProfileScreen } from './profile';


const Tab = createBottomTabNavigator();


// Componente modelo
export const CardOptions = ({ icon, option, aberto, setAberto, dropdown}) => (
  <TouchableOpacity style={styles.card} onPress={() => console.log(dropdown)}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </TouchableOpacity>
);

// Main Component
export function OptionsScreen({}) {
    return(
        <ScrollView style={styles.container}>
        {options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
            dropdown={item.dropdown}
        />
        ))}
    </ScrollView>
    )
};

export function MainScreen({onExit}) {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
          animation: 'shift',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Opções') {
              iconName = 'settings';
            } else if (route.name === 'Perfil') {
              iconName = 'person';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'balck',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Opções" component={OptionsScreen} below-icon={<MaterialIcons name={'person-add'} size={24}/>}/>
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

