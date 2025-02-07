import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getbaseurl from '../../../utils/baseURL'

const baseQuery=fetchBaseQuery({
    baseUrl:`${getbaseurl()}/api/books`,
    credentials:'include',
    prepareHeaders:(Headers)=>{
        const token=localStorage.getItem('token');
        if(token){
            Headers.set('Authorization',`Bearer ${token}`);
        }
        return Headers;
    }
})

const booksapi=createApi({
    reducerPath:'bookApi',
    baseQuery,
    endpoints:(builder)=>({
        fetchAllbooks:builder.query({
            query:()=>"/",
            providesTags:["books"]
        })
    })
})

export const {useFetchAllbooksQuery}=booksapi 
export default booksapi