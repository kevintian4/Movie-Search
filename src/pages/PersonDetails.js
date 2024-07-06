import { useParams } from 'react-router-dom';
import { getItemDetails } from '../services/api';
import { useState, useEffect } from 'react';

function PersonDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItemDetails('person', id)
    .then((data) => {
        setData(data);
    });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
      <div>
          <h1>Person Details</h1>
          <p>Person ID: {id}</p>
          <p>Biography: {data.biography}</p>
      </div>
  );
}

export default PersonDetails;