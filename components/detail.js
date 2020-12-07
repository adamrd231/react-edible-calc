import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Notes</Text>
            <Text style={styles.bodyText}>Calculator does not factor in decarboxylation loss. The advertised thc% of flower sold in recreational sales already takes that into consideration (thc *(thca * 0.87)). What is not accounted for is the loss when making edibles from flower, and why we added a "conversion factor", current research shows only about 70% of thca will convert to thc. Additionally when infusing into coconut oil, butter, etc a percentage of the thc will be left behind no matter how thorough the process. Using the conversion factor you can learn more about your techniques loss factors to more accurately predict potency. Please feel free to email info@rdconcepts.design with any advice, suggestions, questions, or haiku's. Thank you for downloading and using the EdibleTHCcalculator</Text>
            <Text style={styles.title}>Equation:</Text>
            <Text style={styles.bodyText}>( THC% * Weight * conversionFactor) / THC Per Unit</Text>
        </View>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: 'nowrap',
      alignContent: 'stretch',
      backgroundColor: '#444444',
      color: '#ffffff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 35,
      paddingTop: 10,
      textAlign: 'center',
    },

    title: {
        fontWeight: "bold",
        color: '#fff',
        paddingTop: 15,
      },
  
    bodyText:{
        textAlign: "center",
        color: '#fff',
    }
  });