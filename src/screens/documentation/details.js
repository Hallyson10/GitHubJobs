import React from 'react';
import * as Styles from './styles';

const documentation = (props) => {
  return (
    <Styles.ViewVerticalDetails>
    <Styles.ViewDetails>
      <Styles.TextTitleDetails>
          {props.title}
      </Styles.TextTitleDetails>
      </Styles.ViewDetails>
      <Styles.ViewDetails>
      <Styles.TextDescriptionDetail>
      {props.details}
      </Styles.TextDescriptionDetail>
      </Styles.ViewDetails>
  </Styles.ViewVerticalDetails>
  )
}

export default React.memo(documentation);