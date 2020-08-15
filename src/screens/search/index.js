import React,{ useContext} from 'react';
import JobsContext from '../../contexts/jobs';
import SearchComponent from '../../components/search/index';
import { Alert } from 'react-native';

const search = (props) => {
  const { 
    setInputSearch,
    setFullTime,
    setLocation,
    filter: { description, location, fulltime },
    filterJobs
  } = useContext(JobsContext);

  async function filterSearch(){
    if(description !== '' || location !== ''){
      props.navigation.pop();
      await filterJobs();
    }else{
      Alert.alert('Hey Dev!','please enter a skill or location')
    }
  }

  return (
    <SearchComponent
      fulltime={fulltime}
      setFullTime={() => fulltime ? setFullTime(false) : setFullTime(true)}
      inputSearch={description}
      setInputSearch={(text) => setInputSearch(text)}
      inputLocation={location}
      setLocation={(text) => setLocation(text)}
      search={filterSearch}
    />
  )
}

export default React.memo(search);