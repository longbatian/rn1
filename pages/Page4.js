import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Page4 extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, backgroundColor: 'gray'}}>
                <Text style={styles.texts}>
                    欢迎来到page4
                </Text>
                <Button
                    title="Open Drawer"
                    onPress={() => {
                        navigation.openDrawer();
                        // this.props.navigation.openDrawer();
                    }}
                />
                <Button
                    title="Toggle Drawer"
                    onPress={() => {
                        navigation.toggleDrawer();
                        // navigation.navigate('DrawerToggle');
                    }}
                />
                <Button
                    title="Go to Page5"
                    onPress={() => {
                        navigation.navigate('Page5');
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
