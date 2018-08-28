import React from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';

export default class Page3 extends React.Component {
    render() {
        const {navigation} = this.props;
        const {state,setParams}=navigation;
        const {params}=state;
        const showText=params.mode==='edit'?'正在编辑':'编辑完成';
        return (
            <View style={styles.container}>
                <Text style={styles.texts}>欢迎来到page3 </Text>
                <Button
                    title="go back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <TextInput>{showText}</TextInput>
                <TextInput
                    style={styles.input}
                    onChangeText={
                        text=>{
                            setParams({title:text})
                        }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        width:300,
        height: 50,
        borderWidth:1,
        marginTop: 20,
        borderColor:'black',
    },
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
