import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Slider from '@react-native-community/slider';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';





export default function Home(props) {


  const [ thc, SetTHC ] = useState('');
  const [ weight, Setweight ] = useState('');
  const [ dosage, SetDosage ] = useState('');
  const [ conversionFactor, setConversionFactor ] = useState('70');
  const [ calculationForDosage, setcalculationForDosage ] = useState('');
  const [ calculationForTotalTHC, setcalculationForTotalTHC ] = useState('');

  const [ interstitialCount, SetInterstitialCount ] = useState(0);

  // Ad Mob ID's
  // Banner Test ID
  const adMobInterstitialTestID = 'ca-app-pub-3940256099942544/1033173712'
  const adMobBannerTestID = 'ca-app-pub-3940256099942544/6300978111'

  const CalculateDosage = () => {
    const numberOfSplits = (((thc * 0.01) * (weight * 1000)) * (0.01 * conversionFactor)) / dosage
    const totalTHCinBatch = (thc * 0.01) * (weight * 1000) * (0.01 * conversionFactor)
    setcalculationForTotalTHC(Number(totalTHCinBatch).toFixed())
    setcalculationForDosage(Number(numberOfSplits).toFixed())
    adMobCalls()

  }

  async function adMobCalls() {
    if (interstitialCount === 2) {
        await AdMobInterstitial.setAdUnitID(adMobInterstitialTestID); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync() 
        SetInterstitialCount(0)
    } else {
        SetInterstitialCount(interstitialCount + 1)
    }
      
  }

  return (

    <View style={styles.container}>
      <View style={styles.topContainer} >

      <Text 
        style={styles.questions}
        onPress={() => props.navigation.navigate("Description")}
      >?</Text>
      <Text style={styles.title}>THC%</Text>

    <TextInput 
        style={styles.inputField}
        value={thc} 
        placeholder='THC%'
        onChangeText={thc => SetTHC(thc)}
        keyboardType='numeric' 
        returnKeyLabel='Done'
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
    />

      <Text style={styles.title}>Weight(g)</Text>
      <TextInput 
        placeholder="Weight"
        style={styles.inputField}
        value={weight} 
        onChangeText={weight => Setweight(weight)}
        keyboardType='numeric'
        keyboardType='numeric' 
        returnKeyLabel='Done'
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
      />

      <Text>Number of Units Cooking in the Batch</Text>
      <TextInput 
        style={styles.inputField}
        value={dosage} 
        placeholder='# of Doses'
        onChangeText={dosage => SetDosage(dosage)}
        keyboardType='numeric'
        keyboardType='numeric' 
        returnKeyLabel='Done'
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
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
        disabled={thc == "" || weight == "" || dosage == "" || isNaN(thc) || isNaN(weight) || isNaN(dosage)}
        backgroundColor="#fff"
        
      />
      <Text style={styles.answers}>About {calculationForTotalTHC}mg of THC total.</Text>
      <Text style={styles.answers}>{dosage} units with about {calculationForDosage}mg of THC each.</Text>

    </View>

      <AdMobBanner
        style={styles.adMob}
        bannerSize="320"
        adUnitID={adMobBannerTestID} 
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'nowrap',
    alignContent: 'stretch',
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    
  },

  topContainer: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly'
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
    marginBottom: 20,
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
    padding: 15,
  },

  adMob: {

  }


});
