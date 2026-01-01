import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-left bg-[url(https://images.unsplash.com/photo-1594306280489-ddaaf2439841?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-10 flex justify-between flex-col w-full '>
                <img src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' alt='Uber Logo' className='w-16 ml-8 '/>
                <div className='bg-white pb-7 py-4 px-4 '>
                         <h2 className='text-2xl font-bold'>Get started with Uber</h2>
                         <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
                </div>
            </div>
        </div>   
      
      )
        }
export default Home

