import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { AdMobBanner } from 'expo-ads-admob';

export default function App() {

  const [ thc, SetTHC ] = useState('');
  const [ weight, Setweight ] = useState('');
  const [ dosage, SetDosage ] = useState('');
  const [ conversionFactor, setConversionFactor ] = useState('70');
  const [ calculationForDosage, setcalculationForDosage ] = useState('');
  const [ calculationForTotalTHC, setcalculationForTotalTHC ] = useState('');

  const CalculateDosage = () => {
    const numberOfSplits = (((thc * 0.01) * (weight * 1000)) * (0.01 * conversionFactor)) / dosage
    const totalTHCinBatch = (thc * 0.01) * (weight * 1000) * (0.01 * conversionFactor)
    setcalculationForTotalTHC(Number(totalTHCinBatch).toFixed())
    setcalculationForDosage(Number(numberOfSplits).toFixed())
  }

  return (
    <View style={styles.container}>

      <View >
      <Text 
        style={styles.questions}
      >?</Text>

      <Text style={styles.title}>THC%</Text>
      <TextInput 
        style={styles.inputField}
        value={thc} 
        onChangeText={thc => SetTHC(thc)}
      />

      <Text style={styles.title}>Weight(g)</Text>
      <TextInput 
        style={styles.inputField}
        value={weight} 
        onChangeText={weight => Setweight(weight)}
      />

      <Text>Number of Units Cooking in the Batch</Text>
      <TextInput 
        style={styles.inputField}
        value={dosage} 
        onChangeText={dosage => SetDosage(dosage)}
      />

      <Text>Conversion Factor: {Number(conversionFactor).toFixed()}</Text>
      <Slider 
        value={conversionFactor}
        onSlidingComplete={(conversionFactor) => setConversionFactor(Number(conversionFactor).toFixed())}
        style={{width: 200, height: 30}}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#efefef"
        maximumTrackTintColor="#000000"
      />

      <Button
        title="Calculate"
        onPress={CalculateDosage}
        disabled={thc == "" || weight == "" || dosage == ""}
        
      />
      <Text style={styles.answers}>About {calculationForTotalTHC}mg of THC total.</Text>
      <Text style={styles.answers}>{dosage} units with about {calculationForDosage}mg of THC each.</Text>

    
    </View>


    <View>
      <AdMobBanner
        style={styles.adMob}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      />
    </View>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  title: {
    fontWeight: "bold",
  },

  inputField: {
    fontSize: 25,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 9,
    padding: 9,
    margin: 5,
    minWidth: '50%',
    minHeight: 66,
    textAlign: 'center',
  },

  answers: {
    fontSize: 17,
    padding: 4,
  },

  button: {
    padding: 15,
  },

  questions: {
    fontSize: 40,
    color: "#00aeef",
    fontWeight: "bold",
    marginTop: 25,
  },

  adMob: {

  }


});
