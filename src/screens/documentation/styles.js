import styled from 'styled-components/native';
import colors from '../../fontes/colors';
import fonts from '../../fontes/sizes';

export const Container = styled.ScrollView`
  flex:1;
  background : ${colors.primary};
  padding-vertical : 10px;
  padding-horizontal : 20px;
`;
export const ViewIntroduction = styled.View `
    margin-vertical :20px;
`
export const ViewBody = styled.View `
    margin-bottom : 10px;
`
export const TextIntroduction = styled.Text `
    font-size : ${fonts.med_min}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold';
`
export const TextSubIntroduction = styled(TextIntroduction) `
        color : ${colors.quartenary};
`
export const TextSubDescription = styled.Text `
    font-size : ${fonts.med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold';
    margin-top : 10px;
    margin-bottom : 10px;
`
export const TextBody = styled.Text `
    font-size : ${fonts.med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Regular';
    margin-top : 10px;
    margin-bottom :10px;
`
export const TextTitleDetails = styled.Text `
    font-size : ${fonts.min_med}px;
    color : ${colors.quinary};
    font-family : 'RedHatText-Bold';
    text-align : left;
`
export const TextDescriptionDetail = styled(TextBody) `
    font-size : ${fonts.min_med}px;
    text-align : justify;
    flex-wrap : wrap;
`
export const ViewVerticalDetails = styled.View `
    flex-direction : row;
    align-items : center;
    margin-bottom : 10px;
    padding-left :10px;
`
export const ViewDetails = styled.View `
    flex:1
`
export const ButtonProx = styled.TouchableOpacity `
    min-height : 50px;
    min-width : 140px;
    height : 50px;
    width : 140px;
    border-radius : 8px;
    background : ${colors.secundary};
    margin:20px;
    align-items : center;
    justify-content : center;
    align-self : center;
    margin-bottom:40px;
`
export const TitleButtonProx = styled.Text `
    font-size : ${fonts.med}px;
    color : ${colors.terciary};
    font-family : 'RedHatText-Bold'

`