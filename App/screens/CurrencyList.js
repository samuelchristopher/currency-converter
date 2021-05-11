import React from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import { RowItem, RowSeparator } from '../components/RowItem';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import { useSafeArea } from 'react-native-safe-area-context';

export default ({ navigation }) => {
    const insets = useSafeArea();
    return (
    <View>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
        <FlatList 
            data={currencies}
            renderItem={({ item }) => <RowItem text={item} onPress={() => navigation.pop()}/>}
            keyExtractor={(item) => item}
            ItemSeparatorComponent={() => <RowSeparator />}
            ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }}/>}
        />
    </View>
)
};