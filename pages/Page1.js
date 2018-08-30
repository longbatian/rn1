import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Page1 extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>欢迎来到page1 </Text>
                <Button
                    title="go back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <Button
                    title="go to Page2"
                    onPress={() => {
                        navigation.navigate('Page2');
                    }}
                />

                <Button
                    title="改变主题"
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'orange',
                                updateTime: new Date().getTime(),
                            }
                        });
                    }}
                />
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color: 'red'}}
                />
                <Ionicons
                    name={'ios-home-people'}
                    size={26}
                    style={{color: 'red'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 60
    },
    texts: {
        fontSize: 40

    }
});
