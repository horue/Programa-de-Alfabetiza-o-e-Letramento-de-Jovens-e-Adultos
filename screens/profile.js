//Imports React
import {Text, StyleSheet, View, Image} from 'react-native';


//Imoprts Locais
import { CustomButton } from '../components/buttons';
import { TwoColumnCard } from '../components/twocolumn';
import { useAppContext } from '../contexts/appcontext';




export function ProfileScreen({onExit}) {
  const { usuario } = useAppContext();
  let text = usuario.cpf;
  let characters = text.split("");
  let formattedCPF = characters[0] + characters[1] + characters[2] + '.' + characters[3] + characters[4] + characters[5] + '.' + characters[6] + characters[7] + characters[8] + '-' + characters[9] + characters[10];;

  let text2 = usuario.matricula;
  let characters2 = text2.split("");
  let formattedMatricula = 
  characters2[0] + characters2[1] + characters2[2] + characters2[3] + ' ' +
  characters2[4] + characters2[5] + characters2[6] + characters2[7] + ' ' +
  characters2[8] + characters2[9] + characters2[10]+ characters2[11];

  return(
      <View style={styles.container}>
        <TwoColumnCard nomeCompleto={usuario.nome} matricula={formattedMatricula} CPF={formattedCPF}></TwoColumnCard>
        <CustomButton buttonText='Alterar senha' textAlign='center' textColor='white' buttonColor='#00acbb'></CustomButton>
        <CustomButton buttonText='Sair' textAlign='center' textColor='white' buttonColor='#00acbb' onPress={onExit} ></CustomButton>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.info_text}>As informações presentes podem ser validadas mediante apresentação de documento com foto.</Text>
      </View>
  )
};


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      paddingTop: 120,
      padding: 20,
      marginBottom: 30,
      gap: 20,
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      marginBottom: 10,
      borderRadius: 8
    },
    nome: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      paddingTop: 12, 
    },
    logo: {
      margin: 29,
      height: '20%',
      resizeMode: "contain",
      justifyContent: 'center',
      position: 'center',
      alignSelf: 'center',
    },
    info_text:{
      fontSize: 14,
      color: "#000000",
      opacity: 0.6,
      textAlign: "center",
      alignSelf: "center"
    }
  });
  
  