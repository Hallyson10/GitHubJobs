import React,{ createContext,useState } from 'react';
import * as functions from '../functions/index';

const JobsContext = createContext({
    jobs : [],
    filter : {description : '', location : '', fulltime : false, atived:false},
    loadingJobs : false,
    searchJobs : () => {},
    setInputSearch : (text) => {},
    setLocation : (text) => {},
    setFullTime : (value) => {},
    filterJobs : ()=>{}
});

export const JobsProvider = ( {children} ) => {
    const [Jobs, setJobs ] = useState([]);
    const [description,setDescription] = useState('');
    const [location,setLocation] = useState('');
    const [fulltime,setFullTime] = useState(false);
    const [loadingJobs,setLoadingJobs] = useState(false);
    const [filterAtived,setFilterAtived] = useState(false);
    const [page,setPage] = useState(1);

    async function searchJobs(){
        setLoadingJobs(true);
        setFilterAtived(false);
        const response = await functions.searchAllJobs(page);
        setJobs([...Jobs,...response]);
        setLoadingJobs(false);
        setPage(page => page + 1);
    }
    async function filterJobs(){
        setLoadingJobs(true);
        setFilterAtived(true);
        const response = await functions.filterJobs({
            description, fulltime, location
        });
        setJobs(response);
         setLoadingJobs(false);
    }

    return(
    <JobsContext.Provider value={{
        jobs : Jobs,
        filter : {description : description,location : location, fulltime : fulltime,atived : filterAtived},
        location : location,
        fulltime: fulltime, 
        loadingJobs : loadingJobs,
        searchJobs,
        filterJobs,
        setInputSearch : (text)=> setDescription(text),
        setLocation : (text) => setLocation(text),
        setFullTime : (value) => setFullTime(value)
        }}>
        {children}
    </JobsContext.Provider>
    )
}
export default JobsContext;