import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity
} from 'react-native'

import firebase from "../../services/firebase";

import styles from "./style";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, SetErrorLogin] = useState("");

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Task", { idUser: user.uid })
        })
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    };

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid });
            }
        });
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.headerDescription}>
                <Text style={styles.title}>ROLEZIM</Text>
            </View>
            
            <View style={styles.groupButtons}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira o seu e-mail..."
                    type="text"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Insira a sua senha..."
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                {errorLogin === true
                ?
                    <View style={styles.contentAlert}>
                        <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                        />
                        <Text style={styles.warningAlert}>Senha ou e-mail incorretos!</Text>
                    </View>
                :
                    <View/>
                }

                {email === "" || password === ""
                ?
                    <TouchableOpacity
                        disabled={true}
                        style={styles.buttonLogin}
                    >
                        <Text style={styles.textButtonLogin}>Entrar</Text>
                    </TouchableOpacity>
                :
                    <TouchableOpacity
                        onPress={login}
                        style={styles.buttonLogin}
                    >
                        <Text style={styles.textButtonLogin}>Entrar</Text>
                    </TouchableOpacity>
                }
                <Text style={styles.registration}>
                    Não tem uma conta?
                    <Text
                        style={styles.linkSubscribe}
                        onPress={()=> navigation.navigate("SignUp")}
                    >
                    Cadastre-se agora!
                    </Text> 
                </Text>
            </View>

        </KeyboardAvoidingView>
    )
}
