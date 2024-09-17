const API_KEY = '29a2197ce450a5d039c1398e455871cf'


const requests = {
    requestPopular :`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,


};

export default requests