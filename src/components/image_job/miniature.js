import React from 'react';
import {Image} from "react-native-expo-image-cache";
import colors from '../../fontes/colors';

const image_job = (props) => {
  const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };

  return <Image
    style={{
    maxWidth : 90,
    height : 90,
    width : 90,
    backgroundColor : colors.sextary,
    borderRadius : 8
    }}
    {...{preview , uri : props.uri}}
    resizeMode={props.resizeMode || 'cover'}
  />
}

export default React.memo(image_job);