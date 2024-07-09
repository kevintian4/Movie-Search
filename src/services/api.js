const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export async function getItemDetails(endpoint, id) {
  let url = '';
  
  if (endpoint === 'movie') {
    url = `https://api.themoviedb.org/3/movie/${id}}?append_to_response=images%2Cvideos%2Creviews%2Crecommendations%2Ccredits&language=en-US`;
  } else if (endpoint === 'tv') {
    url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=images%2Cvideos%2Creviews%2Crecommendations%2Ccredits&language=en-US`;  
  } else if (endpoint === 'person') {
    url = `https://api.themoviedb.org/3/person/${id}?append_to_response=combined_credits%2Cimages&language=en-US`;
  } else {
    throw new Error('Invalid endpoint specified');
  }

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
    return json;
  } catch (err) {
    console.error('error:' + err);
    return {};
  }
}

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
    return json.results;
  } catch (err) {
    console.error('error:' + err);
    return [];
  }
}