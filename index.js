import { AppRegistry } from 'react-native';
import App from './App';
import FlatListDemo from './pages/FlatListDemo';
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
    }
})

AppRegistry.registerComponent('rn1', () => AppRoot);
