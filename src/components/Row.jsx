import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { Link } from 'react-router-dom';

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
         <div className='relative flex items-center  '>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item,indx) => (
                    <Link to={`/detail/${item.id}`}>
                     <Movie item={item} index={indx}/>
                    </Link>
                 ))}
            </div>
         </div>
    </div>
  )
}

export default Row