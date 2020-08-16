import styled from 'styled-components/native';
import fontes from '../../fontes/sizes';
import colors from '../../fontes/colors';
export const Container = styled.View`
    max-height : 80px;
    height : 60px;
    justify-content : space-between;
    padding-left : 20px;
    padding-right : 20px;
    flex-direction : row;
    align-items : center
`;
export const TextIntroduction = styled.Text `
    font-size : ${fontes.med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold'

`
export const TextClearFilter = styled.Text `
    font-size : ${fontes.min_med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Regular'
`