import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className='h-[85vh] border w-[75vw] m-auto md:h-[88vh] flex justify-center items-center'>
      <div className='bg-white md:w-[45vw] shadow-md rounded'>
        <h2 className='text-xl font-semibold mb-4 ml-6 mt-4'>Please Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-6' htmlFor="email">Email</label>
                <input  {...register("email", { required: true })} type="email" name='email' placeholder='Email Address' className='shadow appearance-none border rounded w-[90%] ml-[5%] py-2 px-3 leading-tight focus:outline-none focus:shadow' />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-6' htmlFor="email">Passward</label>
                <input {...register("passward", { required: true })} type="passward" name='passward' placeholder='Passward' className='shadow appearance-none border rounded w-[90%] ml-[5%] py-2 px-3 leading-tight focus:outline-none focus:shadow' />
            </div>
            <div className='mb-4 md:m-10 flex justify-center'>
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none  '>Log In</button> */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-200">
  Login
</button>

            </div>
         </form>
         <p className='align-baseline font-medium mt-4 text-sm ml-6'>Haven't an account? please Resgister
          <Link to="/Register" className='p-3 text-blue-500 hover:text-blue-700'>Register</Link></p>
          <div className="mt-4">
            <button
                className=" w-[90%] ml-[5%] flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                
            >
                <FaGoogle className="mr-2" />
                Sign in with Google
            </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs mb-11">
            &copy;2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Login
