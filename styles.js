import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 26,
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
      marginHorizontal: 'auto',
      textAlign: "left",
    },
    hyperlink:{
      fontSize: 14,
      margin: 7,
      marginHorizontal: 620,
      color: "#0000ff",
      textAlign: "right",
    },
    hyperlink_clicked:{
      fontSize: 14,
      margin: 7,
      marginHorizontal: 620,
      color: "#000080",
      textAlign: "right",
      textDecorationLine: 'underline',
    },
    input: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor:"#001a33",
      height: 38,
      width: 700,
      padding: 15,
      marginHorizontal: "auto",
      backgroundColor: "#e0f0ff"
    },
    logo: {
      height: 100,
      width: 346,
      resizeMode: "contain",
      justifyContent: 'center',
      position: 'center',
      alignSelf: 'center',
    },
  });
  