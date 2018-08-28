import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerBackTitle:'返回啦啦'
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>Move bricks... </Text>
                <Button
                    title="go to page1"
                    onPress={() => {
                        navigation.navigate('Page1', {name: '动态的title'})
                    }}
                />
                <Button
                    title="go to page2"
                    onPress={() => {
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title="go to page3"
                    onPress={() => {
                        navigation.navigate('Page3',{title:'23232'})
                    }}
                />
                <Button
                    title="go to TabNatigator"
                    onPress={() => {
                        navigation.navigate('TabNav',{title:'23232'})
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
