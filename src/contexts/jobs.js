import React,{ createContext,useState,useEffect } from 'react';
import * as functions from '../functions/index';

const JobsContext = createContext({
    jobs : [],
    filter : {description : '', location : '', fulltime : false, atived:false},
    loadingJobs : false,
    filterClear : false,
    dataOptionsSelected : [],
    searchJobs : () => {},
    setInputSearch : (text) => {},
    selectedOption : (text) => {},
    setLocation : (text) => {},
    setFullTime : (value) => {},
    filterJobs : (text)=>{},
    clearFilter : () => {}
});
const arrayOptionsSearch = [
    {id : '1',marked :false, title : 'Java'},
    {id : '2',marked :false, title : 'Node'},
    {id : '3',marked :false, title : 'React'},
    {id : '4',marked :false, title : 'PHP'},
    {id : '5',marked :false, title : 'Javascript'},
    {id : '6',marked :false, title : 'Python'},
    {id : '7',marked :false, title : 'Spring'},
    {id : '8',marked :false, title : 'Mobile'},
  ];
export const JobsProvider = ( {children} ) => {
    const [Jobs, setJobs ] = useState([]);
    const [description,setDescription] = useState('');
    const [location,setLocation] = useState('');
    const [fulltime,setFullTime] = useState(false);
    const [loadingJobs,setLoadingJobs] = useState(false);
    const [filterAtived,setFilterAtived] = useState(false);
    const [page,setPage] = useState(1);
    const [filterClear,setFilterClear] = useState(false);
    const [atual,setAtual] = useState({});
    const [dataOptionsSelected,setData] = useState(arrayOptionsSearch);

    async function selectedOption(item){
      if(item.id !== atual.id){
        const newData = dataOptionsSelected.map((res)=>{
            if(res.id === item.id){
              res.marked = true;
            }else{
              res.marked = false;
            }
            return res;
        })
        setData(newData);
        setAtual(item);
        filterJobs(item.title);
      }
    }
    async function searchJobs(coordenadasAtual){
        try {
        setLoadingJobs(true);
        setFilterAtived(false);
        if(coordenadasAtual){
            var response = await functions.searchJobsCoords(coordenadasAtual);
            if(response.length > 0){
                setJobs([...Jobs,...response]);
            }else{
                const AllJobs = await functions.searchAllJobs(page);
                setJobs([...Jobs,...AllJobs]);
            }
            
        }else{
            const AllJobs = await functions.searchAllJobs(page);
            setJobs([...Jobs,...AllJobs]);
        }
        setLoadingJobs(false);
        setPage(page => page + 1);
        setFilterClear(false);//causando re-render//
        resetSelectedOptions();
        } catch (error) {
            setLoadingJobs(false);
            clearFilter();
            resetSelectedOptions();
        }
        
    }
    async function filterJobs(text){
        try {
        setLoadingJobs(true);
        setFilterAtived(true);
        setJobs([]);
        var response;
        if(text){
            response = await findJobsFilter(text);
            setDescription(text);
        }else{
            response = await findJobsFilter(description);
        }
        setJobs(response);
        setLoadingJobs(false);
        } catch (error) {
            return false;
        }
        
    }
    async function findJobsFilter(description){
        try {
            const response = await functions.filterJobs({
                description, fulltime, location
            });
            return response;
        } catch (error) {
            return false;
        }
        
    }
    async function clearFilter(){
        setPage(1);
        setJobs([]);
        setLocation('');
        setDescription('');
        setFullTime(false);
        setFilterClear(true);//causando re-render
        resetSelectedOptions();
    }
    function resetSelectedOptions(){
        setData(dataOptionsSelected.map((res)=>{
            res.marked = false;
            return res;
      }))
      setAtual({});
    }

    return(
    <JobsContext.Provider 
    value={{
        jobs : Jobs,
        filter : {description : description,location : location, fulltime : fulltime,atived : filterAtived},
        location : location,
        fulltime: fulltime, 
        loadingJobs : loadingJobs,
        filterClear : filterClear,
        dataOptionsSelected : dataOptionsSelected,
        searchJobs,
        filterJobs : (text) => filterJobs(text),
        selectedOption : (text) => selectedOption(text),
        clearFilter,
        setInputSearch : (text) => setDescription(text),
        setLocation : (text) => setLocation(text),
        setFullTime : (value) => setFullTime(value)
        }}>
        {children}
    </JobsContext.Provider>
    )
}
export default JobsContext;
