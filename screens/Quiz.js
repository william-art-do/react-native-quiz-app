import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Quiz extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>This is Quiz</Text>
                <Button title='Go to Result' onPress={()=>navigate('Result')}/>                
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
    },
});