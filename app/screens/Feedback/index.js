import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { ICONS } from '../../config/images';
import styles from './styles';
import { RadioButton } from 'react-native-paper';
export default function Home({ navigation }) {
    const [value, setValue] = React.useState('first');
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
                        <View style={styles.row}>
                            <Image
                                source={ICONS.close}
                                onPress={() => navigation.navigate('CustomerService')}
                                style={{
                                    margin: 10,
                                    height: 15,
                                    width: 15,

                                }} />
                        </View>
                    </View>
                    <Text style={styles.title}>Feedback</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.optionsContainer}>
                        <Text style={styles.song}>Which Part of the content makes you dissatisfied ?</Text>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={styles.radiooptions}>
                                <RadioButton value="first" />
                                <Text>First</Text>
                            </View>
                            <View style={styles.radiooptions}>
                                <RadioButton value="second" />
                                <Text>Second</Text>
                            </View>
                            <View style={styles.radiooptions}>
                                <RadioButton value="Third" />
                                <Text>Third</Text>
                            </View>
                            <View style={styles.radiooptions}>
                                <RadioButton value="Fourth" />
                                <Text>Fourth</Text>
                            </View>
                        </RadioButton.Group>
                        <Text style={styles.song}>Suggestion</Text>
                        <View style={{ backgroundColor: '#ffffff', borderRadius: 10, elevation: 2, marginLeft: 20, marginRight: 20, height: 100 }}>


                        </View>
                        <Card containerStyle={[styles.optionsCard]}>
                            <Text style={styles.categoryText}>Submit</Text>
                        </Card>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}