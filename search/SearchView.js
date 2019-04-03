import React, { Component } from 'react';
import { Image, Button, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 60,
                    }}>
                    <View style={{ backgroundColor: 'blue', flex: 0.5 }} />
                    <View style={{ backgroundColor: 'red', flex: 0.5 }} />
                </View>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

export default SearchView;