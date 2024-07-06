const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export async function searchMulti(query, pageNumber) {
  const url = `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=${pageNumber}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
    return json.results;
  } catch (err) {
    console.error('error:' + err);
    return [];
  }
}


// export async function getMovieDetails(id) {
//   const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=images%2Cvideos%2Creviews%2Csimilar&language=en-US`;
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`
//     }
//   };

//   fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
// }

