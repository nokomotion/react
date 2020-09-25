/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';

//import all the components we are going to use
import { StyleSheet, View,TextInput } from 'react-native';
import Viewer from './components/views';

function App(){
  
    return (
      <View style={estilo.container}>
        <Viewer/>
        <View style={estilo.containerRed}/>
        <View style={estilo.containerGreen}/>
        
      </View>
     );
 
}


const estilo =StyleSheet.create({
container:{
  flex:1,
  
},
container:{
  flex:1,
  backgroundColor:'red'
},containerGreen:{
  flex:1,
  backgroundColor:'green'
},containerRed:{
  flex:1,
  backgroundColor:'red'
},
});

export default App;