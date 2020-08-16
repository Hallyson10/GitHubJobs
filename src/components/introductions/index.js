import React from 'react';
import * as Styles from './styles';

const introductions = (props) => {
  return (
      <Styles.Container>
          <Styles.TextIntroduction>
              {props.title}
          </Styles.TextIntroduction>
          {props.textClear ? <Styles.TextClearFilter
          onPress={props.clearPress}
          >
              {props.sub_title}
          </Styles.TextClearFilter> : null}
      </Styles.Container>
  )
}

export default React.memo(introductions);