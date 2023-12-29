import React from 'react'
import Image from 'next/image'

const Result = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className='bg-white/40 p-5 flex flex-wrap items-center mt-6 justify-between w-[50%] rounded shadow-md'>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-4xl font-bold'>{data.name}</p>
                    <p className='text-xl mt-5'>{data.weather[0].main}</p>
                    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width='150' height='150' />
                </div>
                <div>
                    <p className='text-[10vw] font-extrabold'>{data.main.temp.toFixed(0)}&#176;C</p>
                </div>

            </div>

            <div className='flex flex-wrap justify-evenly w-[70%] mx-8 p-6 mt-8 bg-white/50 text-white rounded text-xl'>
                <p>Humidity : {data.main.humidity}%</p>
                <p>Feels like : {data.main.feels_like.toFixed(0)}&#176;C</p>
                <p>Winds : {data.wind.speed.toFixed(0)} MPH</p>
            </div>
        </>
    )
}

export default Result