import React from 'react';
import * as Styles from './styles';

const documentation = (props) => {
  return (
      <Styles.ButtonProx activeOpacity={0.9} onPress={props.onPress}>
          <Styles.TitleButtonProx>
              Next
          </Styles.TitleButtonProx>
      </Styles.ButtonProx>
  )
}

export default React.memo(documentation);