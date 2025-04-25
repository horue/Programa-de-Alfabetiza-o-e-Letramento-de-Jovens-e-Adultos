import { View, Text, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


// Dados
const options = [
  { id: 1, icon:"how-to-reg", option: "Realizar Chamada", screen:"realizar_chamada"},
  { id: 2, icon:"note-add", option: "Adicionar Conteúdo"},
  { id: 3, icon:"calendar-month", option: "Criar Turma"},
  { id: 4, icon:"calendar-month", option: "Criar Aluno"},
  { id: 5, icon:"person-add", option: "Adicionar Aluno"},
];

// https://fonts.google.com/icons


// Componente modelo
const CardOptions = ({ icon, option}) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={24}/>
    <Text style={styles.nome}>{option}</Text>
  </View>
);

// Main Component
const App = () => (
  <View style={styles.container}>
    {options.map((item) => (
      <CardOptions
        key={item.id}
        icon={item.icon}
        option={item.option}
      />
    ))}
  </View>
);


const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  nome: { fontSize: 16, fontWeight: 'bold', paddingTop: 12, },
});

export default App;