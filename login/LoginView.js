import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, TextInput, View, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, alignSelf: 'center' }}>
                    <View style={{ flex: 1, alignSelf: 'center' }}>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={{ width: 80, height: 80, margin: 100 }}
                        />
                        <TextInput
                            style={{ height: 60, marginTop: 5, fontSize: 20, backgroundColor: '#C5C5C5' }}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <TextInput
                            style={{ height: 60, marginTop: 5, fontSize: 20, backgroundColor: '#C5C5C5' }}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <TouchableOpacity style={{ marginTop: 30, alignItems: 'center', backgroundColor: 'red', height: 60, justifyContent: 'center', borderRadius: 8 }}>
                            <Text style={{ fontSize: 20, color: 'white' }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

export default LoginView;