import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width , height } = Dimensions.get('window');
import colors from '../../fontes/colors';
import fonts from '../../fontes/sizes';

export const Container = styled.ScrollView`
  
`;
export const ContainerView = styled.View `
    height : ${height/1}px;
    flex:1;
    align-items : center;
    justify-content : center;
    background : ${colors.primary};
`
export const ViewButtonApply = styled.View `
    bottom : 6px;
    height : 60px;
    flex-direction : row;
    align-items : center;
    width: ${width/1}px;
    position : absolute;
    padding-horizontal : 20px;
`
export const ButtonCopy = styled.TouchableOpacity `
    flex:1;
    background : ${colors.sextary};
    border-radius : 8px;
    align-items : center;
    justify-content : center;
    height : 50px;
    margin-right : 10px;
`
export const ButtonApply = styled.TouchableOpacity `
    flex:2;
    background : ${colors.quinary};
    border-radius : 8px;
    align-items : center;
    justify-content : center;
    height : 50px;
`
export const TitleApply = styled.Text `
    font-size : ${fonts.min_med}px;
    color : ${colors.terciary};
    font-family : 'RedHatText-Bold';
`