import React from 'react';
import { View, SafeAreaView, TextInput, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.topCard}>
                    <View style={styles.header}>
                        <Icon
                            type="antdesign"
                            onPress={() => navigation.goBack()}
                            name="arrowleft"
                            style={{
                                marginLeft: 15,
                                alignSelf: 'flex-start',
                            }}
                            size={25}
                            containerStyle={{
                                flex: 1,
                                alignItems: 'flex-start',
                            }}
                        />
                        { <View style={styles.row}>
                            <Icon
                                type="antdesign"
                                name="plus"
                                onPress={() => navigation.navigate('CustomerService')}
                                size={25}
                            />
                        </View> }
                    </View>
                    <Text style={styles.title}>Carrier</Text>
                </View>
                <View style={styles.content}>
                <Text style={styles.focusedLabel}>Company Name </Text>
                <TextInput style={styles.TextInputLayoutStyle} placeholder="Add a comment !" />
                <Text style={styles.focusedLabel}>Designation </Text>
                <TextInput style={styles.TextInputLayoutStyle} placeholder="Add a comment !" />
                <Text style={styles.focusedLabel}>Start Year </Text>
                <TextInput style={styles.TextInputLayoutStyle} placeholder="Add a comment !" />
                <Text style={styles.focusedLabel}>Start Year </Text>
                <TextInput style={styles.TextInputLayoutStyle} placeholder="Add a comment !" />

                </View>
            </View>
        </SafeAreaView>
    );
}

const users = [
    {
        name: 'Co-owner of ',
        artist: 'Micheal Jackson',
        recordings: '1.4 K',
    },
    {
        name: 'Admin of ',
        artist: 'Micheal Jackson',
        recordings: '1.4 K',
    },
    {
        name: 'Lead Singer of ',
        artist: 'Micheal Jackson',
        recordings: '1.4 K',
    }
];
