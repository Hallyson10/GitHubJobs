import React from 'react';
import * as Styles from './styles';


const introductions = (props) => {
  return (
      <Styles.Container>
          <Styles.TextIntroduction>
              All Jobs
          </Styles.TextIntroduction>
          {props.textClear ? <Styles.TextClearFilter
          onPress={props.clearPress}
          >
              Clear filter
          </Styles.TextClearFilter> : null}
      </Styles.Container>
  )
}

export default React.memo(introductions);