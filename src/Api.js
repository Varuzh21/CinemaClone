import axios from 'axios';

const AUT_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjZmNGI3ZjNlZjA2YjZiNjM1MTc5ZjZiZDA1M2U4MyIsIm5iZiI6MTczMDIyMzg3Ni40MTMyMzI2LCJzdWIiOiI2NzFjYmJhODViZTllODc1OWRhNzYwNjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wDiB53ufURnk3EQa6SIcMfHBMp1Ab9kWwUdXehsssqk';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${AUT_TOKEN}`
  },
});

class Api {
  static postUser(from) {
    return api.post('https://dummyjson.com/auth/login', from);
  }
  static getUser(userToken) {
    return api.get('https://dummyjson.com/auth/me', {headers: {'Authorization': `Bearer ${userToken}`}});
  }
  static getAllMovies() {
    return api.get('discover/movie',)
  }
  static getAllGenres() {
    return api.get('genre/movie/list',)
  }
  static getSingleMovie(moveId) {
    return api.get(`movie/${moveId}`,)
  }
  static getCreditsMovie(moveId) {
    return api.get(`movie/${moveId}/credits`,)
  }
}

export default Api;
