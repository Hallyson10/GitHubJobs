import React from 'react';
import * as Styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const home = (props) => {

  return (
  <Styles.ContainerHeader>
    <Styles.ViewSearch>
        <Styles.TitleHowItWorks
        onPress={props.onPressHowApply}
        >
            HOW IT WORKS?
        </Styles.TitleHowItWorks>
        <AntDesign
            onPress={props.search}
            name='search1'
            size={30}
        />
    </Styles.ViewSearch>
    <Styles.ViewTextGitHub>
    <Styles.ViewTextIcon>
    <Styles.TitleGitHub>
        GitHub Jobs
    </Styles.TitleGitHub>
    <Styles.IconImage source={require('../../../assets/iconGit.png')} style={{height:80,width:80}} />
    </Styles.ViewTextIcon>
    </Styles.ViewTextGitHub>
  </Styles.ContainerHeader>
  )
}

export default React.memo(home);