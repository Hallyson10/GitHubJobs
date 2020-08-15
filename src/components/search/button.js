import React from 'react';
import * as Styles from './styles';

const search = (props) => {
  return (
    <Styles.ButtonFullTime 
    atived={props.atived}
    activeOpacity={0.8}
    onPress={props.onPress}
    >
        <Styles.TitleButtonFullTime atived={props.atived}>
            Full Time
        </Styles.TitleButtonFullTime>
    </Styles.ButtonFullTime>
  )
}

export default search;