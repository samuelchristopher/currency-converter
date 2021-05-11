import React, { useEffect, useState } from 'react';
import { Keyboard, View, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0
  }
});

export const KeyboardSpacer = ({ onToggle }) => {
  const [ keyboardHeight, setKeyboardHeight ] = useState(0);
  const screen = Dimensions.get('window');

    useEffect(() => {
      const showListner = Keyboard.addListener('keyboardDidShow', (e) => {
        let endY = e.endCoordinates.screenY;
        setKeyboardHeight(screen.height - endY);
        onToggle(true);
      })

      const hideListner = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardHeight(0);
        onToggle(false);
      })

      return () => {
        showListner.remove();
        hideListner.remove();
      }
    }, []);
    
    return (
      <View style={[styles.container, {height: keyboardHeight}]} />
    );
}