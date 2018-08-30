import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page5 extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: 'gary'}}>
                <Text style={styles.texts}>
                    欢迎来到page5
                </Text>
                <Button
                    title="Open Drawer"
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
                <Button
                    title="Toggle Drawer"
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
                <Button
                    title="Go to Page4"
                    onPress={() => {
                        navigation.navigate('Page4');
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
