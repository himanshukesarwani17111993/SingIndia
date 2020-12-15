import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';

export default function Home({ navigation }) {
    const renderSongs = (item, index) => {
        return (
            <View key={index} style={styles.optionsContainer}>
                <Text style={styles.song}>{item.name}</Text>
                <Image
                    source={ICONS.next}
                    style={{
                        marginRight:20,
                        height: 15,
                        width: 15,
                    }}
                />
            </View>
        );
    };

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
                                marginLeft:15,
                                alignSelf: 'flex-start',
                            }}
                            size={25}
                            containerStyle={{
                                flex: 1,
                                alignItems: 'flex-start',
                            }}
                        />
                        <View style={styles.row}>
                            <Icon
                                type="antdesign"
                                name="plus"
                                onPress={() => navigation.navigate('CustomerService')}
                                size={25}
                            />
                        </View>
                    </View>
                    <Text style={styles.title}>My Room</Text>
                </View>
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {users.map((item, index) => renderSongs(item, index))}
                    </ScrollView>
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
