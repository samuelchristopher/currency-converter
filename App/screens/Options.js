import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from '../components/SafeAreaView';
import colors from '../constants/colors';

const styles = new StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
      <Entypo name="chevron-right" size={20} color={colors.blue} />
    </TouchableOpacity>

    <View style={styles.border} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Favoured Moments</Text>
      <Entypo name="export" size={20} color={colors.blue} />
    </TouchableOpacity>

    <View style={styles.border} />

    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>Visiglobe</Text>
      <Entypo name="export" size={20} color={colors.blue} />
    </TouchableOpacity>
  </SafeAreaView>
);