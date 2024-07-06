import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/api';
import { useState, useEffect } from 'react';

function ShowDetails() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
      getItemDetails('tv', id)
      .then((data) => {
          setData(data);
      });
    }, [id]);

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Show Details</h1>
            <p>Show ID: {id}</p>
            <p>Overview: {data.overview}</p>
        </div>
    );
}

export default ShowDetails;