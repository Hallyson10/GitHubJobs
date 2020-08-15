import React,{useState} from 'react';
import * as Styles from './styles';
import { ActivityIndicator } from 'react-native';
const search = (props) => {
    const [disabled,setDisabled] = useState(false);
    const [loading,setLoading] = useState(false);


    return (
      <Styles.ButtonSearch 
      activeOpacity={0.9}
      onPress={()=>{
          setDisabled(true);
          setLoading(true);
          props.onPress()
          setTimeout(()=>{
            setDisabled(false);
            setLoading(false);
          },5000)
          }}
      disabled={disabled}
      >
         { !loading ?  <Styles.TitleButtonSearch>
          Search
          </Styles.TitleButtonSearch> :
          <ActivityIndicator size='small' color='#fff' />}
      </Styles.ButtonSearch>
  )
}

export default search;