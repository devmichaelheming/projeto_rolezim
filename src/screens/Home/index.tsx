import React from 'react'

import {
    Container,
    Logo,
    GroupButtons,
    SignIn,
    SignUp,
} from './style'

import Button from "../../components/Button";

export default function Home({ navigation }) {

    return (
        <Container>
            <Logo>Rolezim</Logo>

            <GroupButtons>
                <Button title="SignIn" action={()=> navigation.navigate("SignIn")} />

                <Button title="SignUp" action={()=> navigation.navigate("SignUp")} />
            </GroupButtons>
        </Container>
    )
}
