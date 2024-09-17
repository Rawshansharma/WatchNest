import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Row  title='Popular' fetch_url={requests.requestPopular}/>
    <Row  title='Top Rated' fetch_url={requests.requestToprated}/>
    <Row  title='Trending' fetch_url={requests.requestTrending}/>
    <Row  title='Upcoming' fetch_url={requests.requestUpcoming}/>

    </>
  )
}

export default Home