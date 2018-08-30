import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
// import {AppStackNavigator} from './navigators/AppNavigatoes'

// export default AppStackNavigator;

export default class App extends Component<props>{
    render(){
        const {navigation} =this.props;
        return(
            <View>
               <Button
                title={'FlatListDemo'}
                onPress={()=>{
                    navigation.navigate('FlatListDemo')
                }}
               />
            </View>
        )
    }
};

