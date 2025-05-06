import { View, Text, StyleSheet } from 'react-native';

export const TwoColumnCard = ({ leftContent, rightContent, CPF, matricula, campus, nomeCompleto, nascimento }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nomeCompleto}</Text>
      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          <Text>Matrícula</Text>
          <Text>{matricula}</Text>
          <Text>Campus</Text>
          <Text>{campus}</Text>
        </View>
        <View style={styles.column}>
          <Text>CPF</Text>
          <Text>{CPF}</Text>
          <Text>Nascimento</Text>
          <Text>{nascimento}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 26,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
