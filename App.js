import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import UDP from 'react-native-udp';
const App = () => {
  const sendMsg = async () => {
    try{
      const client = UDP.createSocket('udp4');
      const msg = 'Hello World';
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => sendMsg()}>
        <Text>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default App;