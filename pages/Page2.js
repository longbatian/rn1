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
