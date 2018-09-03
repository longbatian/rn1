import React, {Component} from 'react';
import {StyleSheet,
    SectionList,
    Text,
    View,
    Button} from 'react-native';
// import {AppStackNavigator} from './navigators/AppNavigatoes'

// export default AppStackNavigator;

export default class App extends Component<props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.buttons}>
                <Button
                    style={styles.buttons}
                    title={'FlatListDemo'}
                    color={'red'}
                    onPress={() => {
                        navigation.navigate('FlatListDemo')
                    }}
                />
                <Button
                    style={styles.buttons}
                    title={'SwipeableFlatListDemo'}
                    onPress={() => {
                        navigation.navigate('SwipeableFlatListDemo')
                    }}
                />
                <Button
                    style={styles.buttons}
                    title={'SectionListDemo'}
                    color={'red'}
                    onPress={() => {
                        navigation.navigate('SectionListDemo')
                    }}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    buttons: {
        margin: 15,
        color: 'red'
    }
})
