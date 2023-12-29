"use client"
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchForm = ({cityName, fetchDataFun, setcity}) => {
  return (
    <>
        <div className='flex items-center justify-between bg-white px-4 py-1 w-[50%] text-xl rounded mt-[5%]'>
            <input value={cityName} type="text" placeholder='Search...' className='p-4 max-w-[75%] border-none focus:outline-none' onChange={
                (e)=>{setcity(e.target.value)
                // console.log(e.target.value)
                }
            } />
            <button onClick={fetchDataFun} className='mr-4'><BsSearch/></button>
        </div>
    </>
  )
}

export default SearchForm