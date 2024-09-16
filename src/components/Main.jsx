import axios from 'axios'
import React, { useEffect, useState } from 'react'
import request from '../Request'

const Main = () => {
    const [movies ,setMovies] = useState([])
    useEffect(() => {
        axios.get(request.requestPopular).then((respose) => {
            setMovies(respose.data)
           
        })
    },[])
    console.log(movies);
  return (
    <div>

    </div>
  )
}

export default Main