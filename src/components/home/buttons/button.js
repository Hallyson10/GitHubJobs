import React from 'react';
import * as Styles from './styles';

const botoes = (props) => {
  return (
      <Styles.ContainerButton activeOpacity={0.9} onPress={props.onPress} api={props.api} marked={props.marked} >
          <Styles.TitleButtons>
            {props.title}
          </Styles.TitleButtons>
      </Styles.ContainerButton>
  )
}

export default botoes;