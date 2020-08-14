import styled from 'styled-components/native';
import fontes from '../../../fontes/sizes';
import colors from '../../../fontes/colors';

export const Container = styled.TouchableOpacity`
  min-height : 130px;
  height : 220px;
  background : ${colors.terciary};
  margin-horizontal : 20px;
  border-radius : 8px;
  flex-direction : row;
  margin-bottom : 10px;
`;

export const ImageContainer = styled.View `
    flex:1;
    align-items : center;
    justify-content : center;
    border-radius : 10px
`
export const ImageJob = styled.Image `
    max-width : 90px;
    height : 90px;
    width : 90px;
    background : ${colors.sextary};
    border-radius : 8px;
`
export const ContainerInformationsJobComponent = styled.View `
    flex:2
`
export const TitleTypeJob = styled.Text `
    font-size : ${fontes.med}px;
    color : ${colors.secundary};
    flex-wrap: wrap;
    font-family : 'RedHatText-Bold'
`
export const SubTitleJob = styled.Text `
    font-size : ${fontes.min_med}px;
    color : ${colors.secundary};
    font-weight : 900;
    font-family : 'RedHatText-Regular'

`
export const TitleCityJob = styled.Text `
    font-size : ${fontes.min}px;
    color : ${colors.sextary};
    font-family : 'RedHatText-Regular'
`
export const ViewInformations = styled.View `
    flex:2;
    padding-horizontal : 10px;
    padding-top : 10px;
`
export const ContainerTemp = styled.View `
    height : 28px;
    width : 60px;
    background : ${colors.quartenary};
    align-items : center;
    justify-content : center;
    border-radius : 8px;
    margin-left : 10px;
`
export const TitleTypeTemp = styled(TitleCityJob) `
    font-weight : bold;
    color : ${colors.terciary};
    font-family : 'RedHatText-Regular'
`
export const TitleHoursPosted = styled(TitleCityJob) `
    text-align : right;
    margin : 2px;
    margin-right : 10px;
    margin-bottom :10px;
    font-family : 'RedHatText-Regular'
`
export const ContainerTextIcons = styled.View `
    flex-direction : row;
    flex:1;
    align-items :center;
`