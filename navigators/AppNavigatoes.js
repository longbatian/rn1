import {StackNavigator,TabNavigator,TabBarBottom,} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import React from 'react'
import {Button,Platform} from 'react-native'
import Ionicons from 'react-native-vector-icons'

export const AppTabNavigator=TabNavigator({
    Page1:{
        screen:Page1,
        NavigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page2:{
        screen:Page2,
        NavigationOptions:{
            tabBarLabel:'Page2',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-people':'ios-home-people'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page3:{
        screen:Page3,
        NavigationOptions:{
            tabBarLabel:'Page3',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-chatboxes':'ios-home-chatboxes'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Platform.OS === 'android' ? '#2d5b8a' : '#000',

    },
    tabBarPosition:'bottom',
})

export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面`
        })

    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            title: 'Page3'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>  {
                            setParams({mode: params.mode === 'edit' ? "" : 'edit'})
                        }}
                    />
                )
            }
        }
    },
    TabNav:{
        screen:AppTabNavigator,
        navigationOptions:{
            title:'This is TabNavigator'
        }
    }
});