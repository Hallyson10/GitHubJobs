import styled from 'styled-components/native';
import colors from '../../../fontes/colors';
import fonts from '../../../fontes/sizes';

export const Container = styled.View `
    padding-bottom : 20px;
    flex-direction : row;
    align-items : center;
`
export const ContainerButton = styled.TouchableOpacity`
    min-height : 42px;
    max-height : 42px;
    height : 42px;
    min-width : 138px;
    max-width:13px;
    border-radius : 8px;
    align-items : center;
    justify-content : center;
    background : ${props => props.api ? '#4F4F4F' : props.marked ? '#FF4343':'#000000'};
    margin : 10px;
`;

export const TitleButtons = styled.Text `
        font-size : ${fonts.med}px;
        color : ${colors.terciary};

`