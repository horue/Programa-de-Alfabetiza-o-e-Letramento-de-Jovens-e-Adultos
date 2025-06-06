//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';




//Imoprts Locais
import { professor_options, full_options } from '../components/options';
import { ProfileScreen } from './profile';
import RegisterScreen from './register';
import { CustomHeader } from '../components/header';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function OptionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="OptionsScreen" component={OptionsScreen} options={{ title: 'Opções' }}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Cadastro' }}/>
    </Stack.Navigator>
  );
}

// Componente modelo
export const CardOptions = ({ icon, option, aberto, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </TouchableOpacity>
);

// Main Component
export function OptionsScreen({ navigation }) {
  const [isProfessor, setProfessor] = useState(true);   
  const options = isProfessor ? professor_options : full_options;
    return(
      <>
        <CustomHeader></CustomHeader>
        <ScrollView style={styles.container}>
        {options.map((item) => (
        <CardOptions
            key={item.id}
            icon={item.icon}
            option={item.option}
            onPress={() => navigation.navigate(item.screen)}
        />
        ))}
    </ScrollView>
      </>
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
        <Tab.Screen name="Opções" component={OptionsStack} below-icon={<MaterialIcons name={'person-add'} size={24}/>} options={{ headerShown: false }}/>
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

