import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axois from 'axios'
import getbaseurl from '../utils/baseURL';


const AdminLogin = () => {
    const navigate=useNavigate()
    const [message,setmessage]=useState("");
     const { register, handleSubmit, watch, formState: { errors } } = useForm(); 
    const onSubmit = async(data) => {
        console.log(data);
        try {
         const response = await axois.post(`${getbaseurl()}/api/auth/admin`,data,{
            headers:{
                'Content-Types':'application/json',
            }
         })
         const auth=response.data;
         if(auth.token){
            localStorage.setItem("token",auth.token)
            setTimeout(() => {
                localStorage.removeItem('token')
                alert('Token has been Expired')
                navigate("/")
            }, 3600*1000);
         }
         alert("Admin Login successfull!")
          
         navigate("/dashboard")
        } catch (error) {
          setmessage("Invalid email and password")
           console.log(error.message);
        }
      }
    return (
        <div className='h-[85vh] border w-[75vw] m-auto md:h-[88vh] flex justify-center items-center'>
          <div className='bg-white md:w-[45vw] shadow-md rounded'>
            <h2 className='text-xl font-semibold mb-4 ml-6 mt-4'>Admin Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-6' htmlFor="email">Username</label>
                <input  {...register("username", { required: true })} type="username" name='username' placeholder='username ' className='shadow appearance-none border rounded w-[90%] ml-[5%] py-2 px-3 leading-tight focus:outline-none focus:shadow' />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-6' htmlFor="email">Passward</label>
                <input {...register("passward", { required: true })} type="passward" name='passward' placeholder='Passward' className='shadow appearance-none border rounded w-[90%] ml-[5%] py-2 px-3 leading-tight focus:outline-none focus:shadow' />
              </div>
              {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
              <div className='mb-4 md:m-10 flex justify-center'>
                {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none  '>Log In</button> */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-200">
                  Login
                </button>
    
              </div>
            </form>
   
            <div className="mt-4">
         
            </div>
            <p className="mt-5 text-center text-gray-500 text-xs mb-11">
              &copy;2025 Book Store. All rights reserved.
            </p>
          </div>
        </div>
      )
}

export default AdminLogin
