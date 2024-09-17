import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Row = ({title,fetch_url}) => {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetch_url).then((res) => {
            setMovies(res.data.results)
        }).catch((err) => {
            console.log(err);
        })
    },[fetch_url])
    
  return (
    <div>
         <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
         <div className='relative flex items-center '>
            <div id={'slider'}>
                {movies.map((item,indx) => (
                    <div className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block   '>
                        <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt="" />
                    </div>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Row