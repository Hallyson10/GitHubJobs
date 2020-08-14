import styled from 'styled-components/native';
import fontes from '../../fontes/sizes';
import colors from '../../fontes/colors';
export const Container = styled.View`
    max-height : 80px;
    height : 60px;
    justify-content : center;
    padding-left : 20px;
`;
export const TextIntroduction = styled.Text `
    font-size : ${fontes.med}px;
    color : ${colors.secundary};
    font-family : 'RedHatText-Bold'

`
