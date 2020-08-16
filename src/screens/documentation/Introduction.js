import React from 'react';
import * as Styles from './styles';

const documentation = (props) => {
  return (
  <Styles.ViewIntroduction>
    <Styles.TextIntroduction>
        The GitHub Jobs API
    </Styles.TextIntroduction>
    <Styles.TextSubIntroduction>
    {props.title}
    </Styles.TextSubIntroduction>
  </Styles.ViewIntroduction>
  )
}

export default React.memo(documentation);