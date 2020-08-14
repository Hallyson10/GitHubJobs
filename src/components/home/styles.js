import styled from 'styled-components/native';
import fontes from '../../fontes/sizes';
import colors from '../../fontes/colors';

export const ContainerHeader = styled.View`
  padding : 20px;
  margin-bottom : 20px;
`;
export const ViewSearch = styled.View `
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`
export const TitleHowItWorks = styled.Text `
    font-size : ${fontes.min}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Regular'
`
export const TitleGitHub = styled.Text `
    font-size : ${fontes.max}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold';
`
export const ViewTextGitHub = styled.View `
    max-height : 80px;
    max-width : 120px;
    margin-top :40px;
`
export const ViewTextIcon = styled.View `
    flex-direction : row;
    align-items : center;
`
export const IconImage = styled.Image `
    height : 68px;
    width : 68px;
    margin-left : -10px;
    margin-top:-4px;
`