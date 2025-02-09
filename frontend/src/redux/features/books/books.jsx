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
        }),
        fetchbookbyId:builder.query({
            query:(id)=>`/${id}`,
            providesTags:(results,error,id)=>[{type:"books",id}],

        }),
        addbook:builder.mutation({
            query:(newbook)=>({
                url:`/create-book`,
                method:"POST",
                body:newbook
            }),
            invalidatesTags:["books"]
        }),
        updatebook:builder.mutation({
            query:(id,...rest)=>({
                url:`/edit/${id}`,
                method:"PUT",
                body:rest,
                headers:{
                    'content-type':'application/json'
                }
            }),
            invalidatesTags:["books"]
        }),
        deletebook:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["books"]
        })
    })
})

export const {useFetchAllbooksQuery,useFetchbookbyIdQuery,useUpdatebookMutation,useDeletebookMutation,useAddbookMutation}=booksapi 
export default booksapi