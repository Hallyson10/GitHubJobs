import React,{useState, useEffect} from 'react';
import ProfileJobComponent from '../../components/profile_job/index';
import { ActivityIndicator, Clipboard, Alert } from 'react-native';
import * as Styles from './styles';
import api from '../../../services/api';

const profile_job = ({navigation,route}) => {
  const [data,setData] = useState(null);
  
  useEffect(()=>{
    (async()=>{
      const response = await api.get(`/positions/${route.params.id}.json?markdown=true`);
      setData(response.data)
    })();
  },[])
  if(!data){
    return(
        <Styles.ContainerView>
            <ActivityIndicator size='small' color='#000' />
        </Styles.ContainerView>
    )
  }
  return (
    <>
    <Styles.Container>
    <ProfileJobComponent
      typeJob={data.type}
      created_at={data.created_at}
      company={data.company}
      location={data.location}
      titleJob={data.title}
      description={data.description}
      company_logo={data.company_logo}
    />
    </Styles.Container>
    <Styles.ViewButtonApply>
    <Styles.ButtonCopy onPress={async()=>{
      await Clipboard.setString(data.url);
      Alert.alert('Copied',data.url)
    }} activeOpacity={0.9}>
    <Styles.TitleApply>
      Copy
    </Styles.TitleApply> 
    </Styles.ButtonCopy>
    <Styles.ButtonApply 
    onPress={()=> navigation.navigate('ApplyMessage',
    {company_url:data.company_url, how_to_apply:data.how_to_apply})}
    activeOpacity={0.9}>   
    <Styles.TitleApply>
      How to apply
    </Styles.TitleApply> 
    </Styles.ButtonApply>
    </Styles.ViewButtonApply>
    </>
  )
}

export default profile_job;