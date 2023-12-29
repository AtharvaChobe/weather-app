"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Result from './components/Result';



const page = () => {

  
  const [city, setcity] = useState("");
  const [weather, setweather] = useState({})
  const [loading, setloading] = useState(false)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_KEY}&units=metric`

  const fetchData = (e) => {
    e.preventDefault();
    setloading(true);
    axios.get(url).then((response) => {
      setweather(response.data);
      console.log(response.data);
    })
    setcity("")
    setloading(false)
  }

  if(loading){
    return <Spinner/>
  }
  else{

    return (
      <>
          {/* overlay */}
          {/* <div className='absolute top-0 left-0 right-0 bottom-0'></div> */}
  
          {/* bg image */}
          <Image src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" layout='fill'
            className='object-cover blur z-[-1]'
          ></Image>

          {/* <video src={require('../../public/clouds.mp4')} autoPlay muted loop className='absolute top-0 object-cover h-[100%] w-[100%] z-[-1]'/> */}
        <div className='flex items-center flex-col justify-center w-full h-full'>
          <SearchForm fetchDataFun={fetchData} cityName={city} setcity={setcity} />
          {weather.main && <Result data={weather} />}
        </div>
      </>
    )
  }
}

export default page