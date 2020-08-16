import React from 'react';
import * as Styles from './styles';
import { AntDesign, Feather, Fontisto} from '@expo/vector-icons';
import { Clipboard,Alert } from 'react-native';

const apply_message = ({ route, navigation }) => {
  const { company_url, how_to_apply } = route.params;
  
  async function writeToClipboard(){
    await Clipboard.setString(how_to_apply);
    Alert.alert('copied to your clipboard!',how_to_apply)
  };

  return (
    <Styles.Container>
        <Styles.ViewVertical>
        <Styles.TextIntroduction>
        contact
        </Styles.TextIntroduction>
        <Feather name='message-square' size={20} color='#000' />
        </Styles.ViewVertical>
        <Styles.ViewEmail>
        <Styles.TitleEmail>
            {how_to_apply}
        </Styles.TitleEmail>
        <AntDesign name='paperclip' onPress={writeToClipboard} size={30} style={{alignSelf:'flex-end'}} />
        </Styles.ViewEmail>
        <Styles.ViewVertical>
        <Styles.TextIntroduction>
        link to website
        </Styles.TextIntroduction>
        <Fontisto name='world-o' size={20} color='#000' />
        </Styles.ViewVertical>
        <Styles.ViewWeb
        activeOpacity={0.9}
        onPress={()=>navigation.navigate('WebView',{uri : company_url,navigation:navigation })}
        >
        <Styles.TitleWeb>
        {company_url}
        </Styles.TitleWeb>
        </Styles.ViewWeb>
    </Styles.Container>
  )
}

export default apply_message;