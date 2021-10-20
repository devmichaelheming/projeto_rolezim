import React, { useState } from 'react'
import { Platform } from 'react-native'

import firebase from '../../services/firebase'

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
    LinkSignIn
} from './style'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from '../../global/styles/theme';
import Button from "../../components/Button";

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          navigation.navigate("Task", { idUser: user.uid })
        })
        .catch((error) => {
            if (password.length <= 8) {
                setErrorRegister("Use 8 caracteres ou mais para sua senha.") 
            }
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    return (
        <Container
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <BgOne>
                <Logo>
                    ROLEZIM
                </Logo>
            </BgOne>

            <Body>
                <Header>
                    <Title>Sign Up</Title>
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
                {errorRegister
                ?
                    <ContentAlert>
                        <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color={theme.colors.danger}
                        />
                        <WarningAlert>{errorRegister}</WarningAlert>
                    </ContentAlert>
                :
                    <></>
                }

                {email === "" || password === ""
                ?
                    <Button
                        title="Sign Up"
                        status={true}
                        bg={theme.colors.primary}
                        color="#FFF"
                    />
                :
                    <Button
                        title="Sign Up"
                        action={register}
                        bg={theme.colors.primary}
                        color="#FFF"
                    />
                }
                <Registration>
                    Already registered?
                    <LinkSignIn
                        onPress={()=> navigation.navigate("SignIn")}
                    >
                    Sign In!
                    </LinkSignIn> 
                </Registration>
            </Body>
            <BgTwo />

        </Container>
    )
}