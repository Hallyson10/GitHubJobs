import React from 'react';
import * as Styles from './styles';


const introductions = () => {
  return (
      <Styles.Container>
          <Styles.TextIntroduction>
              All Jobs
          </Styles.TextIntroduction>
      </Styles.Container>
  )
}

export default React.memo(introductions);