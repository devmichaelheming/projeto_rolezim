import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'

import {
    Container,
    Header,
    Title,
    Body,
    Input,
    ContentAlert,
    WarningAlert,
    Registration,
    BgOne,
    BgTwo,
    Logo,
    LinkSignUp,
    AlternateLogin,
    SignInGoogle,
    SignInFacebook
} from "./style";

import firebase from "../../services/firebase";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';

import Button from "../../components/Button";

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);
    
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
        <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BgOne>
                <Logo>
                    LOGO
                </Logo>
            </BgOne>
            
            <Body>
                <Header>
                    <Title>Sign In</Title>
                </Header>

                <Input
                    placeholder="Enter your e-mail"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                {errorLogin === true
                ?
                    <ContentAlert>
                        <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color={theme.colors.danger}
                        />
                        <WarningAlert>Incorrect password or email!</WarningAlert>
                    </ContentAlert>
                :
                    <></>
                }

                {email === "" || password === ""
                ?
                    <Button
                        title="Sign In"
                        status={true}
                        bg={theme.colors.primary}
                        color="#FFF"
                    />
                :
                    <Button
                        title="Sign In"
                        action={login}
                        bg={theme.colors.primary}
                        color="#FFF"
                    />
                }
                <Registration>
                    Don't have an account?
                    <LinkSignUp
                        onPress={()=> navigation.navigate("SignUp")}
                    >
                    Register now!
                    </LinkSignUp> 
                </Registration>

                <AlternateLogin>
                    <SignInGoogle>
                        <MaterialCommunityIcons
                            name="google"
                            size={28}
                            color="#FFF"
                        />
                    </SignInGoogle>
                    <SignInFacebook>
                        <MaterialCommunityIcons
                            name="facebook"
                            size={28}
                            color="#FFF"
                        />
                    </SignInFacebook>
                </AlternateLogin>
            </Body>
            <BgTwo />

        </Container>
    )
}
