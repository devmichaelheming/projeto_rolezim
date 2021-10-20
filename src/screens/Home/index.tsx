import React from 'react'

import {
    Container,
    Logo,
    GroupButtons,
} from './style'

import Button from "../../components/Button";
import { theme } from '../../global/styles/theme';

export default function Home({ navigation }) {

    return (
        <Container>
            <Logo>Rolezim</Logo>

            <GroupButtons>
                <Button
                    title="SignIn"
                    action={()=> navigation.navigate("SignIn")}
                    bg="#FFF"
                    color={theme.colors.primary}
                />

                <Button
                    title="SignUp"
                    action={()=> navigation.navigate("SignUp")}
                    bg="#FFF"
                    color={theme.colors.primary}
                />
            </GroupButtons>
        </Container>
    )
}
