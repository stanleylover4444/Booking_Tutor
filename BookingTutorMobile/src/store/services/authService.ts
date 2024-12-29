import {api} from '../../store/app';

export const login = (data: any) => {
  return api.post('/auth/login', data);
};

export const register = async (data: any) => {
  try{
    const API = process.env.REACT_APP_API_BASE_URL
    console.log("APIAPIAPIAPIAPI" , API)
    console.log("registerregisterregisterregisterregister" )
    const res = await api.post('/auth/register', data);


    return res
  }catch(error : any){
    console.log("zzzerrorerrorerrorerror" , error , error?.response )
  }
};
