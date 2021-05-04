import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import SafeAreaView from './SafeAreaView';
import colors from '../constants/colors'

const styles = new StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  text: {
    fontSize: 16,
    color: colors.text
  },
  border: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    margin: 20
  }
});

export default () => (
  <SafeAreaView>
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>21 in 2021</Text>
    </TouchableOpacity>

    <View style={styles.border} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Favoured Moments</Text>
    </TouchableOpacity>

    <View style={styles.border} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Visiglobe</Text>
    </TouchableOpacity>
  </SafeAreaView>
);