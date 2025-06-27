//Imports React
import { Text, StyleSheet, TouchableOpacity} from 'react-native';



//Imoprts Locais


// Componente modelo
export const CustomButton = ({ icon, buttonText, textAlign, onPress, buttonColor, textColor, styles: customStyles }) => (
  <TouchableOpacity style={[styles.card, {backgroundColor: buttonColor}, customStyles]} onPress={() => {try{onPress()}catch(error){console.log('No function defined')}}}>
    <Text style={[styles.text, { textAlign, color: textColor, fontWeight: 'bold'  }]}>{buttonText.toUpperCase()}</Text>
  </TouchableOpacity>
);

// Main Component
export const styles = StyleSheet.create({
    card: {
        height: 40,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center', 
        elevation: 2
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
