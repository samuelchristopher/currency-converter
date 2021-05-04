import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
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

export const RowItem = ({ rightIcon, text, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    { rightIcon }
  </TouchableOpacity>
);

export const RowSeparator = () => <View style={styles.border} />;