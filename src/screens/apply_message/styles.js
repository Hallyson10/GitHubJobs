import styled from 'styled-components/native';
import colors from '../../fontes/colors';
import fonts from '../../fontes/sizes';

export const Container = styled.View`
  flex:1;
  background : ${colors.primary};
`;
export const ViewEmail = styled.View `
    min-height : 120px;
    background : ${colors.terciary};
    margin : 20px;
    padding : 20px;
    border-radius : 8px;
`
export const ViewWeb = styled.TouchableOpacity `
    min-height : 120px;
    background : ${colors.secundary};
    margin : 20px;
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