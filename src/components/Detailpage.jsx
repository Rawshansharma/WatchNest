import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const Detailpage = () => {
 const {id} = useParams();
 const [movie, setMovie] = useState(null);
 const [loading, setLoading] = useState(true);
 const API_KEY = '29a2197ce450a5d039c1398e455871cf'
 useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then((respose) => {
        setMovie(respose.data)
     }).catch(err => {
      console.log(err)
     })
     setLoading(false);
 },[id])
 
 if (loading) {
  return <div className="text-center text-2xl">Loading...</div>;
}
  return (
    <div className="container mx-auto p-4">
    {movie ? (
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Movie Poster */}
            <div className="w-full md:w-1/3">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* Movie Information */}
            <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                <p className="text-gray-300 text-sm mb-2">
                    Release Date: {movie.release_date}
                </p>
                <p className="text-gray-200 text-lg mb-4">{movie.overview}</p>

                <div className="flex space-x-4">
                    <div>
                        <h2 className="text-lg font-semibold">Rating</h2>
                        <p className="text-gray-600">{movie.vote_average}/10</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Runtime</h2>
                        <p className="text-gray-600">{movie.runtime} mins</p>
                    </div>
                </div>

                {/* Genre Tags */}
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Genres</h2>
                    <div className="flex flex-wrap space-x-2 mt-2">
                        {movie.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <Link to='/'>
                    <button className='px-3 py-2 mt-4 bg-blue-100 text-blue-800 rounded-full '>Go to Home page</button>
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <p>Movie not found</p>
    )}
</div>
  )
}

export default Detailpage