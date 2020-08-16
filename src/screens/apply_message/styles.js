import styled from 'styled-components/native';
import colors from '../../fontes/colors';
import fonts from '../../fontes/sizes';

export const Container = styled.ScrollView`
  flex:1;
  background : ${colors.primary};
`;
export const ViewEmail = styled.View `
    min-height : 120px;
    background : ${colors.terciary};
    margin-horizontal : 20px;
    padding : 20px;
    border-radius : 8px;
`
export const ViewWeb = styled.TouchableOpacity `
    min-height : 120px;
    background : ${colors.secundary};
    margin-horizontal : 20px;
    align-items : center;
    justify-content : center;
    border-radius : 8px;
`

export const TitleEmail = styled.Text `
    font-size : ${fonts.med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold'
`
export const TitleWeb = styled(TitleEmail) `
    color : ${colors.primary};
`
export const ViewVertical = styled.View `
    flex-direction : row;
    align-items : center;
    margin-vertical : 10px;
`
export const TextIntroduction = styled.Text `
    font-size : ${fonts.med_min}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold';
    margin-left : 20px;
    margin-right : 10px;
`