import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button} from 'react-native';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
const d = new Date();
let hour = d.getHours();



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={styles.paragraph}>
        PALJA - Programa de Alfabetização e Letramento de Jovens e Adultos{'\n'}{'\n'}
        {hour < 12 ? (<Text>Bom Dia!</Text>):( hour < 18 ? (<Text>Boa Tarde!</Text>):(<Text>Boa Noite!</Text>))}
      </Text >
            <Button title="ENTRAR COM EMAIL" icon="">
      </Button>
      <Text style={styles.paragraph}>
      ----------------------- ou -----------------------
      </Text>
      <Text style={styles.common_text}>
        Matrícula
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.hyperlink}>
        Não sei a matrícula
      </Text>
      <Text style={styles.common_text}>
        Senha
      </Text>
      <TextInput style={styles.input}>
      </TextInput>
      <Text style={styles.hyperlink}>
        Esqueci minha senha/Cadastrar primeira senha
      </Text>
      <Button title="Entrar">
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
  },
  common_text: {
    fontSize: 15,
    marginBottom: 7,
    color: "#000000",
    textAlign: "left",
  },
  hyperlink:{
    fontSize: 14,
    margin: 7,
    color: "#0000ff",
    textAlign: "right",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor:"#000000",
    height: 38,
    backgroundColor: "#e0f0ff"
  },
    logo: {
    height: 100,
    width: 346,
    resizeMode: "contain",
    justifyContent: 'center',
    position: 'center',
  },
});
