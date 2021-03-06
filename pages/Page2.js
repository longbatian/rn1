import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page2 extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>欢迎来到page2 </Text>
                <Button
                    title="go back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <Button
                    title="go Page1"
                    onPress={() => {
                        navigation.navigate('Page1');
                    }}
                />
                <Button
                    title="改变主题"
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'red',
                                updateTime: new Date().getTime(),
                            }
                        });
                    }}
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
