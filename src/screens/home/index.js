import React,{ useEffect ,useContext} from 'react';
import * as Styles from './styles';
import { FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import JobComponent from '../../components/home/job_component';
import HeaderFlatList from './header_flatlist';
import JobsContext from '../../contexts/jobs';
import location from '../../../services/location';

const home = (props) => {
  const { 
    jobs,
    loadingJobs,
    filterClear,
    filter:{atived},
    searchJobs,
     } = useContext(JobsContext);
    
  
      async function findJobs(){
        try {
          const asyncStorage = await AsyncStorage.getItem('coords');
          var data;
          if(asyncStorage === null){
            data = await location();
            if(data){
              await searchJobs(data.coords);
              await AsyncStorage.setItem('coords',JSON.stringify(data.coords));
            }else{
             await searchJobs(false);
            }
          }else{
            const coords = JSON.parse(asyncStorage);
            await searchJobs(coords);

          }
        } catch (error) {
          alert(error)
        }
      }
    
  useEffect(() => {
    findJobs();
  },[filterClear]);

  return (
    <Styles.Container>
        <FlatList
            ListHeaderComponent={
              <HeaderFlatList navigation={props.navigation}/>
            }
            ListFooterComponent={
            <>
            {loadingJobs ? <Styles.ViewLoading>
            <ActivityIndicator size='small' color='#FF4343' />
            </Styles.ViewLoading> : null }
            </>
            }
          ListFooterComponentStyle={{marginBottom:20}}
          data={jobs}
          key={props => props.id}
          keyExtractor={props => props.id}
          onEndReached={!atived ? findJobs : false}
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