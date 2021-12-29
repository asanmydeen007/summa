/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNUpiPayment from 'react-native-upi-payment'
const App= () => {
 

  return (<>
    
    <Button title="hi" onPress= {()=>{
      RNUpiPayment.initializePayment({
        vpa: 'john@upi', // or can be john@ybl or mobileNo@upi
        payeeName: 'John Doe',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn'
      }, ()=>{console.log(vpa)}, ()=>{console.log("failure")});
       
    }}/>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
