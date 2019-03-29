import React, { Component } from 'react';
import { Image, Button, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    display: 'flex',
                    margin: 10
                }}>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ width: 80, height: 80, marginTop: 5 }}
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
                    <Button
                        // onPress={onPressSignIn}
                        style={{
                            width: 260,
                            alignItems: 'center',
                            padding: 10,
                        }}
                        title="Sign In"
                        color="#841584"
                        accessibilityLabel="Sign In using this button">
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default LoginView;