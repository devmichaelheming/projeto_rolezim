import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
    padding-top: ${getStatusBarHeight()}px;
`;

export const Logo = styled.Text`
    font-size: 60px;
    font-family: ${theme.fonts.title700};
    color: #FFF;
`;

export const GroupButtons = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    margin-bottom: 40px;
`;

export const SignIn = styled.Text`
    flex: 1;
    font-size: 14px;
    color: ${theme.colors.heading};
`;

export const SignUp = styled.Text`
    flex: 1;
    font-size: 14px;
    color: ${theme.colors.heading};
`;