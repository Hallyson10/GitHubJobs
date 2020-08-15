import React from 'react';
import * as Styles from './styles';

const search = (props) => {
  return (
      <Styles.Container>
      <Styles.ContainerInput>
          <Styles.TitleSearch>{props.titleSearch}</Styles.TitleSearch>
          <Styles.Input
              placeholder={props.placeholder}
              value={props.value}
              onChangeText={(text)=>props.onChangeText(text)}
          />
          </Styles.ContainerInput>
      </Styles.Container>
  )
}

export default search;