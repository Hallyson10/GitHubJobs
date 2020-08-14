import React from 'react';
import { Image } from 'react-native'; 
import colors from '../../fontes/colors';

const image_job = (props) => {
  return <Image 
  style={{
    maxWidth : 90,
    height : 90,
    width : 90,
    backgroundColor : colors.sextary,
    borderRadius : 8
  }}
    source={{uri : props.uri}}
    resizeMode='cover'
  />
}

export default React.memo(image_job);