import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import getbaseurl from '../../../utils/baseURL'



const ordersapi=createApi({
    reducerPath:'orderApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${getbaseurl()}/api/orders`,
        credentials:'include',
    
    }),
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(newOrder)=>({
                url:"/",
                method:"POST",
                body:newOrder,
                credentials:'include'
            }),
          
            }),
            getOrder:builder.query({
                query:(email)=>({
                    url:`/email/${email}`,
                    method:"GET",
                    credentials:'include'

                }),
                providesTags:['Orders']
            
        }),
        
    })
})

export const{useCreateOrderMutation,useGetOrderQuery}=ordersapi
export default ordersapi