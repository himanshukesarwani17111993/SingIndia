import React from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Text, Image } from 'react-native';
import { IMAGES } from '../../config/images';
import styles from './styles';

export default function Home({ navigation }) {
    const renderSongs = (item, index) => {
        return (
            <View key={index} >
                <View style={styles.optionsContainer}>
                    <View style={{ width: '20%', flexDirection: 'column' }}>
                        <Image source={IMAGES.thirdrow} style={styles.profileImg} />
                        <View style={{ flexDirection: 'row', flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                            <Image source={IMAGES.heart} style={styles.Heart} />
                            <Text style={styles.Recording}>{item.recordings}</Text>
                        </View>
                    </View>
                    <View style={{ width: '80%', alignContent: 'center', justifyContent: 'center' }}>
                        <Text style={styles.Name}>{item.name}</Text>
                        <Text style={styles.Details}>{item.artist}</Text>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Image source={IMAGES.thirdrow} style={styles.avatar} />
                <View style={{ marginTop: -180, width: '100%' }}>
                    <Image source={IMAGES.leftarrow} style={styles.ImgBack} onPress={() => navigation.goBack()} />
                    <Image source={IMAGES.closeblack} style={styles.ImgCross} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 140, alignSelf: 'flex-end', marginRight: 20 }}>
                    <View style={styles.circle}>
                        <Image source={IMAGES.speechbubble} style={styles.search} />
                    </View>
                    <View style={styles.circle}>
                        <Image source={IMAGES.medal} style={styles.search} />
                    </View>
                </View>
                <View style={styles.MiddleLayerStyleSheet}>
                    <View style={{ width: '20%', flexDirection: 'column', alignItems: 'center' }}>
                        <View style={styles.PurpleCircle}>
                        <Image source={IMAGES.speechbubble} style={styles.search} />
                        </View>                        
                    </View>
                    <View style={{ width: '70%',  }}>
                        <Text style={styles.Name1}>Mical Bruno</Text>
                        <Text style={styles.Details}>hello Mical hello Mical hello Mical hello Mical hello Mical </Text>
                    </View>
                </View>
                <ScrollView style={{paddingBottom:100}} showsVerticalScrollIndicator={false}>
                    {users.map((item, index) => renderSongs(item, index))}
                </ScrollView>
                <View style={styles.BottomBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMAGES.thirdrow} style={styles.profilebottomImg} />
                        <TextInput style={styles.TextInputLayoutStyle} placeholder="Add a comment !" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const users = [
    {
        name: 'Emma Stone',
        artist: 'Photo grapher Musition,Photo grapher Musition,Photo grapher Musition,Photo grapher Musition',
        recordings: '10',
    },
    {
        name: 'Emma Stone',
        artist: 'Photo grapher Musition,Photo grapher Musition,Photo grapher Musition,Photo grapher Musition',
        recordings: '10',
    },
    {
        name: 'Emma Stone',
        artist: 'Photo grapher Musition,Photo grapher Musition,Photo grapher Musition,Photo grapher Musition',
        recordings: '10',
    }
];
