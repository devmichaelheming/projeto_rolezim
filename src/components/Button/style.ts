import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Btn = styled.TouchableOpacity`
    background-color: #FFFFFF;
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 10px 0;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.primary};
`;