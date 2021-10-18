import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background: ${theme.colors.primary};
    padding-top: ${getStatusBarHeight()}px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Text`
    font-size: 60px;
    font-family: ${theme.fonts.title700};
    color: #FFFFFF;
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