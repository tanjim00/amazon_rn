import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                marginTop: 50
            }}
        >
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={{
                        uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                    }}
                />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            marginTop: 20,
                            color: "#041E42"
                        }}
                    >
                        Login in to your Account
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#D0D0D0",
                            gap: 5,
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30
                        }}>
                        <MaterialIcons
                            style={{ marginLeft: 8 }}
                            name="email" size={24} color="black" />
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize: email ? 16 : 16
                            }}
                            placeholder='Enter your Email' />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#D0D0D0",
                            gap: 5,
                            paddingVertical: 5,
                            borderRadius: 5,
                            marginTop: 30
                        }}>
                        <AntDesign
                            style={{ marginLeft: 8 }}
                            name="lock1" size={24} color="black" />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color: "gray",
                                marginVertical: 10,
                                width: 300,
                                fontSize:password ? 16 : 16
                            }}
                            placeholder='Enter your Password' />
                    </View>


                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})