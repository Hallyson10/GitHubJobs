import styled from 'styled-components/native';
import fonts from '../../fontes/sizes';
import colors from '../../fontes/colors';

export const Container = styled.View`
  background : ${colors.primary};
  margin-horizontal : 20px;
  padding-top : 20px;

`;
export const ContainerInput = styled.View `
`
export const TitleSearch = styled.Text `
    font-size : ${fonts.med}px;
    margin-bottom : 10px;
    font-family : 'RedHatText-Bold'
`
export const Input = styled.TextInput `
    min-height : 50px;
    border-radius : 8px;
    font-family : 'RedHatText-Regular';
    color : ${colors.secundary};
    padding-left : 10px;
    background : ${colors.terciary};
    font-size : ${fonts.med}px;
`
export const ContainerSeacherOptions = styled.View `
    flex:1;
    align-items : center;
`
export const ButtonFullTime = styled.TouchableOpacity `
    min-height : 40px;
    min-width : 100px;
    height : 40px;
    width : 100px;
    border-radius : 8px;
    background : ${props => props.atived ? '#4ABB00':'#FFF'};;
    margin:20px;
    align-items : center;
    justify-content : center;
`
export const TitleButtonFullTime = styled.Text `
    font-size : ${fonts.min_med}px;
    color : ${props => props.atived ? '#FFF':'#000'};
    font-family : 'RedHatText-Regular'
`

export const ButtonSearch = styled.TouchableOpacity `
    min-height : 50px;
    min-width : 140px;
    height : 50px;
    width : 140px;
    border-radius : 8px;
    background : ${colors.secundary};
    margin:20px;
    align-items : center;
    justify-content : center;
`
export const TitleButtonSearch = styled.Text `
    font-size : ${fonts.med}px;
    color : ${colors.terciary};
    font-family : 'RedHatText-Bold'

`