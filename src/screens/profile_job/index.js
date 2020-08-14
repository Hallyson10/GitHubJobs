import React from 'react';
import ProfileJobComponent from '../../components/profile_job/index';
import * as Styles from './styles';
import { View } from 'react-native';

const profile_job = () => {
  return (
    <View style={{flex:1}}>
    <Styles.Container>
    <ProfileJobComponent/>
    </Styles.Container>
    </View>

  )
}

export default profile_job;