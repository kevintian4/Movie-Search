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

  console.log(data);

  // const alsoKnownAs = data.alsoKnownAs.length > 0 ? data.alsoKnownAs : null;
  const biography = data.biography !== "" ? data.biography : null;
  // const birthday = data.birthday ? data.birthday : null;
  const photo = data.profile_path ? data.profile_path : null;

  return (
    <div className="details" id="person-details">
      <h1>Person Details</h1>
      { photo && 
        <img 
          id="person-details-photo"
          src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} 
          alt="Person backdrop" 
        />
      }
      <main>
        { biography && (
          <section className="overview-section">
            <h2>Overview</h2>
            <p className="overview">{biography}</p>
          </section>)
        }
      </main>
      
    </div>
  );
}

export default PersonDetails;