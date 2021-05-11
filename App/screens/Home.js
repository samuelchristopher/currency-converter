import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions, 
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  Text } 
from 'react-native';
import { format } from 'date-fns';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import colors from '../constants/colors';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import { Entypo } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        // paddingTop: screen.height * 0.2
    },
    content: {
      paddingTop: screen.height * 0.1
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      position: 'absolute',
      zIndex: 2,
      width: screen.width * 0.25,
      height: screen.width * 0.25,
    },
    logoBackground: {
      width: screen.width * 0.45,
      height: screen.width * 0.45,
    },
    textHeader: {
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      color: colors.white,
      marginTop: 20,
      marginBottom: 20
    },
    text: {
      color: colors.white,
      textAlign: 'center'
    },
    header: {
      alignItems: 'flex-end',
      marginRight: 20
    }
});


export default ({ navigation }) => {
  let baseCurrency = 'USD';
  let quoteCurrency = 'SGD';
  let conversionRate = 1.33;
  let date = new Date();

  let [ shouldScroll, setShouldScroll ] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Entypo name="cog" size={32} color={colors.white}/>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView scrollEnabled={shouldScroll}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo} 
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
            />
            <Image
              style={styles.logoBackground} 
              source={require('../assets/images/background.png')}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text="USD"
            onButtonPress={() => alert('yo')}
            value="123"
            onChangeText={(text) => console.log("text", text)}
          />
          <ConversionInput
            text="SGD"
            onButtonPress={() => alert('yo')}
            value="123"
            editable={false}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, 'do MMM, yyyy')}`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert('todo')}/>
          <KeyboardSpacer onToggle={(keyboardVisible) => setShouldScroll(keyboardVisible)}/>
        </View>
      </ScrollView>
    </View>
  )
}