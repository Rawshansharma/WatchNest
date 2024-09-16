const API_key = 'bd6a903a9f4a73fb378fb1014b4f27a2';

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
};

export default request;