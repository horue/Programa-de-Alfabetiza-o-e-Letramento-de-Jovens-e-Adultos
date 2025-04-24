import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    hyperlink_clicked:{
      fontSize: 14,
      margin: 7,
      color: "#0000cc",
      textAlign: "right",
      textDecorationLine: 'underline',
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
  