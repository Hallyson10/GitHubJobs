import styled from 'styled-components/native';
import fontes from '../../fontes/sizes';
import colors from '../../fontes/colors';
import { Dimensions } from 'react-native';
const { width , height } = Dimensions.get('window');
export const Container = styled.View`
  flex:1;
  background : ${colors.primary}
`;
export const ContainerHeader = styled.View `
    flex:1;
    min-height : 300px;
    padding:30px;
    padding-top : 60px;
`
export const ContainerImageTitle = styled.View `
    flex:1;
    align-items : center;
    justify-content : center;
`
export const TitleJob = styled.Text `
    color : ${colors.secundary};
    font-size : ${fontes.med_min}px;
    text-align : center;
    flex-wrap : wrap;
    font-weight : bold;
    font-family : 'RedHatText-Bold';
    margin-top : 10px;
`
export const SubTitleCompany = styled.Text `
    color : ${colors.sextary};
    font-size : ${fontes.med}px;
    text-align : center;
    font-family : 'RedHatText-Regular';
`
export const ContainerBody = styled.View `
    flex:1;
`
export const ContainerRequirements = styled.View `
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    margin:20px;
`
export const TitleRequirement = styled.Text `
    color : ${colors.secundary};
    font-size : ${fontes.med}px;
    font-family : 'RedHatText-Bold';
`
export const TitleTypeTemp = styled(TitleRequirement) `
        color : ${colors.terciary};
`
export const ViewTypeJob = styled.View `
    min-height : 36px;
    min-width : 90px;
    border-radius : 8px;
    align-items : center;
    justify-content : center;
    background : ${colors.quartenary};
    margin : 10px;
`
export const DescriptionRequirements = styled.Text `
    color : ${colors.secundary};
    font-size : ${fontes.med}px;
    font-family : 'RedHatText-Regular';
    text-align : justify;
    margin : 20px;
    margin-bottom:80px;
`
