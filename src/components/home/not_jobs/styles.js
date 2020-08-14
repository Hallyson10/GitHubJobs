import styled from 'styled-components/native';
import colors from '../../../fontes/colors';

export const Container = styled.View`
  flex: 1;
  align-items : center;
  justify-content : center;
  background : ${colors.primary};
`;
export const MessageNotPost = styled.Text `
    font-size : 20px;
    color : ${colors.secundary};
    text-align : center;
    margin-horizontal: 20px;
    font-family : 'RedHatText-Medium'

`