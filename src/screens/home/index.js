import React,{ useState, useEffect ,useContext} from 'react';
import * as Styles from './styles';
import { FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';
import Cabecalho from '../../components/home/cabecalho';
import JobComponent from '../../components/home/job_component';
import Introduction from '../../components/introductions';
import NotJobComponent from '../../components/home/not_jobs/message_not_post';
import JobsContext from '../../contexts/jobs';

const home = (props) => {
  const { jobs,searchJobs,loadingJobs,filter:{atived},clearFilter } = useContext(JobsContext);
  async function findJobs(){
    try {
       await searchJobs();
    } catch (error) {
      alert('Desculpa, Ocorreu um erro inesperado :/')
    }
  }
  useEffect(() => {
    findJobs();
  },[]);

  return (
    <Styles.Container>
        <FlatList
          ListHeaderComponent={
        <>
          <Cabecalho
          onPressHowApply={()=>props.navigation.navigate('HowToApply')}
          search={()=>props.navigation.navigate('Search')}
           />
          {loadingJobs ? <Styles.ViewLoading>
          <ActivityIndicator size='small' color='#000' />
          </Styles.ViewLoading> : null }
          <Introduction
            textClear={atived ? true : false}
            clearPress={clearFilter}
          />
        </>
        }
          data={jobs}
          key={props => props.id}
          keyExtractor={props => props.id}
          onEndReached={!atived ? searchJobs : false}
          onEndReachedThreshold={0.8}
          initialNumToRender={12}
          renderItem={({item,position})=>(
          <TouchableOpacity  
          activeOpacity={0.8}
          onPress={()=>props.navigation.navigate('ProfileJob',{title:item.location,id : item.id})}>
          <JobComponent 
          key={item.id}
          typeJob={item.type}
          location={item.location}
          company_logo={item.company_logo}
          titleCarg={item.title}
          company={item.company}
          created_at={item.created_at}
          />
          </TouchableOpacity>
      )}
    />
    </Styles.Container>
  )
}

export default React.memo(home);