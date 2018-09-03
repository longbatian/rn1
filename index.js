import { AppRegistry } from 'react-native';
import App from './App';
import FlatListDemo from './pages/FlatListDemo';
import SwipeableFlatList from './pages/SwipeableFlatListDemo';
import SectionListDemo from './pages/SectionListDemo';
import {StackNavigator} from 'react-navigation';

const AppRoot=StackNavigator({
    App:{
        screen:App,
        navigationOptions:{
            title:'App'
        }
    },
    FlatListDemo:{
        screen: FlatListDemo,
        navigationOptions:{
            title:'FlatListDemo'
        }
    },
    SwipeableFlatListDemo:{
        screen: SwipeableFlatList,
        navigationOptions:{
            title:'SwipeableFlatListDemo'
        }
    },
    SectionListDemo:{
        screen: SectionListDemo,
        navigationOptions:{
            title:'SectionListDemo'
        }
    }
})

AppRegistry.registerComponent('rn1', () => AppRoot);
