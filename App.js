import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

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
      <Button 
        title="?"
      />

      <Text>THC</Text>
      <TextInput 
        value={thc} 
        onChangeText={thc => SetTHC(thc)}
      />

      <Text>weight</Text>
      <TextInput 
        value={weight} 
        onChangeText={weight => Setweight(weight)}
      />

      <Text>Number of Units in Batch</Text>
      <TextInput 
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
      />
      <Text>This batch has {calculationForTotalTHC}mg of THC total.</Text>
      <Text>{dosage} units with about {calculationForDosage}mg of THC each.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
