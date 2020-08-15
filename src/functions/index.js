import api from '../../services/api';

export async function searchAllJobs(page=0){
    const response = await api.get(`/positions.json?page=${page}`);
    return response.data;
}

export async function filterJobs({description, fulltime, location}){
    const response = await api.get(`/positions.json?description=${description}&full_time=${fulltime}&location=${location}`);
    return response.data;
}