import React from 'react';
import { Alert, Linking, ScrollView, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from '../components/SafeAreaView';
import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openUrl = url => {
  return Linking.openURL(url).catch(() => Alert.alert('Sorry, something went wrong.', 'Pleasse try again later.'));
};

export default () => (
  <SafeAreaView>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
    <ScrollView>
      <RowItem 
        rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
        text="21 in 2021"
        onPress={() => alert('yoooo!')}
      />

      <RowSeparator />

      <RowItem 
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        text="Favoured Moments"
        onPress={() => openUrl('https://www.instagram.com/favouredmoments.sg/')}
      />

      <RowSeparator />

      <RowItem 
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        text="Visioglobe"
        onPress={() => openUrl('https://visioglobe.com/')}
      />
    </ScrollView>
  </SafeAreaView>
);