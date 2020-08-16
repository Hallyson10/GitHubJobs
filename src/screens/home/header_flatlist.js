import React,{ useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import Cabecalho from '../../components/home/cabecalho';
import Introduction from '../../components/introductions';
import * as Styles from './styles';
import Buttons from '../../components/home/buttons/index';
import JobsContext from '../../contexts/jobs';


const home = (props) => {
    const { 
        loadingJobs,
        filter:{atived},
        clearFilter,
    } = useContext(JobsContext);
    
  return (
    <>
    <Cabecalho
    onPressHowApply={()=>props.navigation.navigate('HowToApply')}
    search={()=>props.navigation.navigate('Search')}
     />
     <Buttons documentationScreen={()=>props.navigation.navigate('PageDocumentation1')} />
    {loadingJobs ? <Styles.ViewLoading>
    <ActivityIndicator size='small' color='#000' />
    </Styles.ViewLoading> : null }
    <Introduction
      title='All jobs'
      sub_title='Clear filter'
      textClear={atived ? true : false}
      clearPress={clearFilter}
    />
    </>
  )
}

export default React.memo(home);