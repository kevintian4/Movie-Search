import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/api';
import { useState, useEffect } from 'react';

function MovieDetails() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
      getItemDetails('movie', id)
      .then((data) => {
          setData(data);
      });
    }, [id]);

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Movie Details</h1>
            <p>Movie ID: {id}</p>
            <p>Overview: {data.overview}</p>
        </div>
    );
}

export default MovieDetails;