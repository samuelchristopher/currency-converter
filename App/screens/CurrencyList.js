import React from 'react';
import { View, StatusBar, FlatList, StyleSheet } from 'react-native';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { useSafeArea } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.blue,
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ({ navigation, route = {} }) => {
    const insets = useSafeArea();
    const { activeCurrency, onChange } = route.params;
    return (
    <View>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
        <FlatList 
            data={currencies}
            renderItem={({ item }) => {
                const selected = activeCurrency === item; 
                return (<RowItem 
                    text={item} 
                    onPress={() => {
                        if (onChange) {
                            onChange(item);
                        }
                        navigation.pop();
                    }}
                    rightIcon={(
                        selected && <View style={styles.icon}>
                            <Entypo name="check" size={20} color={colors.white}/>
                        </View>
                    )}
                />)
            }}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={() => <RowSeparator />}
            ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }}/>}
        />
    </View>
)
};