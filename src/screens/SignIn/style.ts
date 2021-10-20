import {Dimensions} from 'react-native'
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    height: ${Dimensions.get("window").height - 24}px;
    justify-content: space-evenly;
    align-items: center;
`;

export const BgOne = styled.View`
   height: 35%;
   width: ${Dimensions.get('window').width}px;
   background-color: #FFFFFF;
   align-items: center;
   justify-content: center;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    padding: 0 15px;
`;

export const Title = styled.Text`
    font-size: 50px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.primary};
    padding-bottom: 40px;
`;

export const Logo = styled.Text`
    font-size: 50px;
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.primary};
    padding-bottom: 100px;
`;

export const BgTwo = styled.View`
   height: 65%;
   width: 100%;
   background-color: ${theme.colors.primary};
`;

export const Body = styled.View`
    width: 90%;
    height: 60%;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.300);
`;

export const Input = styled.TextInput`
   width: 80%;
   padding: 10px;
   height: 50px;
   border-bottom-width: 1px;
   border-color: ${theme.colors.highlight};
   margin-left: auto;
   margin-right: auto;
   color: #4d5156;
`;

export const ContentAlert = styled.View`
   margin: 20px 0 10px 0;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

export const WarningAlert = styled.Text`
   padding-left: 10px;
   color: ${theme.colors.danger};
   font-size: 16px;
`;

export const Registration = styled.Text`
   color: #4d5156;
`;

export const LinkSignUp = styled.Text`
   color: #1877f2;
   font-size: 14px;
   padding-left: 5px;
`;

export const AlternateLogin = styled.View`
   width: 100%;
   align-items: center;
   justify-content: space-evenly;
   flex-direction: row;
   margin-top: 20px;
   color: ${theme.colors.highlight};
`;

export const SignInGoogle = styled.View`
   width: 50px;
   height: 50px;
   align-items: center;
   justify-content: center;
   background-color: #3b5998;
   border-radius: 100%;
`;

export const SignInFacebook = styled.View`
   width: 50px;
   height: 50px;
   align-items: center;
   justify-content: center;
   background-color: #DB4437;
   border-radius: 100%;
`;