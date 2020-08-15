import styled from 'styled-components/native';
import colors from '../../fontes/colors';
import fonts from '../../fontes/sizes';

export const Container = styled.ScrollView`
  flex:1;
  background : ${colors.primary}
`;
export const ContainerInformations = styled.View `
    flex:1;
    margin-bottom : 20px;
    padding : 20px;
`
export const constTitleIntroduction = styled.Text `
    font-size : ${fonts.med_min}px;
    color : ${props => props.color};
    font-family : 'RedHatText-Bold';
    margin-bottom : 10px;
`
export const ContainerDescriptionPlan = styled.Text `
    font-size : ${fonts.med}px;
    color : ${props => props.color};
    font-family : 'RedHatText-Regular';
    text-align:center
`
export const TextValue = styled(constTitleIntroduction) `
    text-align : center;
    font-size : ${fonts.med_max}px;

`
export const ViewIcon = styled.View `
    height : 80px;
    justify-content : space-between;
    align-items : center;
    flex-direction : row;
`