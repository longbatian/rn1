import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    Text, View,
    RefreshControl,
    ActivityIndicator,
    SectionList
} from 'react-native';
// import {AppStackNavigator} from './navigators/AppNavigatoes'
const CITY_NAMES = [
    {data:['北京', '上海', '成都', '隆昌', '凉山'],title:'一线'},
    {data:['成都', '上海', '成都', '隆昌', '凉山'],title:'2线'}]

export default class SectionListDemo extends Component<props> {
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
                dataArray=this.state.dataArray.concat(CITY_NAMES);
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
    _renderSectionHeader({section}){
        return <View style={styles.sectionHead}>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    }
    render() {
        return (
            <View style={styles.contain}>
                <SectionList
                    sections={CITY_NAMES}
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
                                this.LoadDate(true)
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.LoadDate()
                    }}
                    renderSectionHeader={(data)=> this._renderSectionHeader(data)}
                    ItemSeparatorComponent={()=><View style={styles.separator}/>}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#fafafa',

    },
    texts: {
        color:'#666',
        fontSize: 30
    },
    item: {
        color:'#666',
        width: 300,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#666',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        margin: 10,
        color: 'red'
    },
    sectionHead:{
        height: 50,
        backgroundColor:'#93ebbe',
        alignItems:'center',
        justifyContent:'center'
    },
    separator:{
        height:1,
        backgroundColor:'gray'
    }
})
