import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {s: 'Avengers Endgame', r: 'json', page: '1'},
    headers: {
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      'X-RapidAPI-Key': '1d12e4a2f5msh699854d6ae8f8dbp120727jsn03415b65086b'
    }
  };
  
//   const request=() =>{ 
//     axios.request(options).then(function (response) {
//     // console.log(response.data);
//     setMovies(response.data)
//   }).catch(function (error) {
//     console.error(error);
//   });}


export const GetMovies = async()=>{
    try {
        const response = axios.request(options);
       
        if (response.status) {
            console.log(response)
            // callback(response);
        } else {
          console.log(response.status)
        //   callback(response.status)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}