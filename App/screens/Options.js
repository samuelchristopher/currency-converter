import React from 'react';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from '../components/SafeAreaView';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';


export default () => (
  <SafeAreaView>
    <RowItem 
      rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
      text="21 in 2021"
      onPress={() => alert('yoooo!')}
    />

    <RowSeparator />

    <RowItem 
      rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      text="Favoured Moments"
      onPress={() => alert('yoooo!')}
    />

    <RowSeparator />

    <RowItem 
      rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      text="Visioglobe"
      onPress={() => alert('yoooo!')}
    />
  </SafeAreaView>
);