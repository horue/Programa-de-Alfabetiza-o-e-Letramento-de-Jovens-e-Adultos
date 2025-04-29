//Imports React
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



//Imoprts Locais


// Componente modelo
export const CustomButton = ({ icon, buttonText, textAlign, onPress, buttonColor, textColor }) => (
  <TouchableOpacity style={[styles.card, {backgroundColor: buttonColor}]} onPress={() => {try{onPress()}catch(error){console.log('No function defined')}}}>
    <Text style={[styles.text, { textAlign, color: textColor, fontWeight: 'bold'  }]}>{buttonText.toUpperCase()}</Text>
  </TouchableOpacity>
);

// Main Component
export const styles = StyleSheet.create({
    card: {
        height: 46,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    center: {
        fontSize: 14, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
    },
    left: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        alignSelf: 'left', 
    },
});
