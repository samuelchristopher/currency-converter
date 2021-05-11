import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  text: {
    color: colors.white
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 10
  }
})

export const Button = ({ text, ...rest }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} {...rest}>
      <Image 
        source={require('../assets/images/reverse.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);