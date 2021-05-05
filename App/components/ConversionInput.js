import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  button: {
    borderRightColor: colors.border,
    borderRightWidth: 1,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: colors.blue,
    fontSize: 18
  },
  input: {
    color: colors.textLight,
    padding: 10,
    fontSize: 16,
    flex: 1
  },
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20
  },
  containerDisabled: {
    backgroundColor: colors.offWhite
  }
})

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onButtonPress}
      >
        <Text style={styles.text}>{ text }</Text>
      </TouchableOpacity>
      <TextInput 
        style={styles.input} 
        keyboardType="numeric"
        {...props}
      />
    </View>
  );
}