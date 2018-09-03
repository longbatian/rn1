import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text, View,
    RefreshControl,
    ActivityIndicator,
    SwipeableFlatList,
    TouchableHighlight,
} from 'react-native';
// import {AppStackNavigator} from './navigators/AppNavigatoes'
const CITY_NAMES = ['北京', '上海', '成都', '隆昌', '凉山']

export default class SwipeableFlatListDemo extends Component<props> {
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

    LoadDate(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            })
        }

        setTimeout(() => {
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    }

    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    genQuickActions() {
        return <View style={styles.touchable}>
            <TouchableHighlight
                onPress={() => {
                    alert('确认删除？')
                }}
            >
                <View style={styles.quick}>
                    <Text style={styles.text}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    }

    render() {
        return (
            <View style={styles.contain}>
                <SwipeableFlatList
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
                            titleColor={['red']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.LoadDate(true)
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReachedThreshold={1}
                    onEndReached={() => {
                        this.LoadDate()
                    }}
                    renderQuickActions={() => this.genQuickActions()}
                    maxSwipeDistance={200}
                    bounceFirstRowOnMount={false}
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
        height: 120,
        width: 300,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        margin: 10,
        color: 'red'
    },
    touchable: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        marginRight: 15,
    },
    quick: {
        width:100,
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    s: {}

})
