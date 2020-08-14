import React,{ useState, useEffect ,useLayoutEffect} from 'react';
import * as Styles from './styles';
import { FlatList } from 'react-native';
import Cabecalho from '../../components/home/cabecalho';
import JobComponent from '../../components/home/job_component';
import Introduction from '../../components/introductions';
import NotJobComponent from '../../components/home/not_jobs/message_not_post';
import api from '../../../services/api';

const home = (props) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function findJobs(){
      try {
        //const data = await location();
        const response = await api.get('/positions.json?search=node');
        //alert(JSON.stringify(response.data))
        const resul = await response.data;
        setData(response.data)
      } catch (error) {
        alert(error)
      }
    }
    findJobs();
  },[]);
  return (
    <Styles.Container>
    
    <FlatList
      ListHeaderComponent={
        <>
          <Cabecalho/>
          <Introduction/>
        </>
      }
      data={data}
      key={props => props.id}
      keyExtractor={props => props.id}
      renderItem={({item,position})=>(
        <JobComponent 
        onPress={()=>props.navigation.navigate('ProfileJob',{title:item.type})}
        key={item.id}
        typeJob={item.type}
        location={item.location}
        company_logo={item.company_logo}
        titleCarg={item.title}
        company={item.company}
        created_at={item.created_at}
        />
      )}
    />
    </Styles.Container>
  )
}

export default React.memo(home);