import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text, View,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
// import {AppStackNavigator} from './navigators/AppNavigatoes'
const CITY_NAMES = ['北京', '上海', '成都', '隆昌', '凉山']

export default class FlatListDemo extends Component<props> {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }

    _renderItem(data) {
        return <View style={styles.item}>
            <Text style={styles.text}>
                {data.item}
            </Text>
        </View>
    }

    LoadDate() {
        this.setState(
            {
                isLoading: true
            }
        )
        setTimeout(() => {
            let dataArray = [];
            for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                dataArray.push(this.state.dataArray[i])
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }
    genIndicator(){
        return <View>
            <ActivityIndicator
            size={'large'}
            animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }
    render() {
        return (
            <View style={styles.contain}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}
                    // refreshing={this.state.isLoading}
                    // onRefresh={() => {
                    //     this.LoadDate()
                    // }}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}//android
                            tintColor={['orange']}//ios
                            title={['red']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.LoadDate()
                            }}
                        />
                    }
                    ListFooterComponent={()=> this.genIndicator()}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 60
    },
    texts: {
        fontSize: 30
    },
    item: {
        backgroundColor: "#169",
        height: 200,
        width: 200,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})
