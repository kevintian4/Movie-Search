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

  function formatGender(gender) {
    if(gender === 1) {
      return "Female";
    } else if(gender === 2) {
      return "Male";
    } else if(gender === 3) {
      return "Non-binary";
    } else {
      return "Not specified";
    }
  }

  function formatDate(date) {
    const formattedDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return formattedDate.toLocaleDateString(undefined, options);
  }

  function formatKnownFor(knownFor) {
    if (knownFor === "Acting") {
      return "Actor";
    } else if (knownFor === "Directing") {
      return "Director";
    } else if (knownFor === "Writing") {
      return "Writer";
    } else {
      return knownFor;
    }
  }
  
  console.log(data);

  const alsoKnownAs = data.also_known_as.length > 0 ? data.also_known_as : null;
  const biography = data.biography !== "" ? data.biography : null;
  const birthday = data.birthday ? formatDate(data.birthday) : null;
  const combinedCredits = data.combined_credits > 0 ? data.combined_credits : null;
  const deathday = data.deathday ? data.deathday : null;
  const gender = data.gender ? formatGender(data.gender) : null;
  const photo = data.profile_path ? data.profile_path : null;
  const homepage = data.homepage ? data.homepage : null;
  const images = data.images.profiles.length > 0 ? data.images.profiles : null;
  const knownFor = data.known_for_department ? formatKnownFor(data.known_for_department) : null;
  const placeOfBirth = data.place_of_birth ? data.place_of_birth : null; 

  return (
    <div className="details" id="person-details">
      <h1 id="person-name">{data.name}</h1>
      <div id="person-details-header">
        <div id="person-name-and-image">
          { photo && 
            <img 
              id="person-details-photo"
              src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} 
              alt="Person backdrop" 
            />
          }
        </div>
        <div id="person-general-details">
          <div id="person-title-gender-container">
            { knownFor && <p id="known-for-title">{knownFor}</p> }
            { knownFor && gender && <p id="person-title-gender-separator">|</p>}
            { gender && <p id="person-gender">{gender}</p> }
          </div>
          { birthday && <p>Born: {birthday}</p>}
          { deathday && <p>Died: {deathday}</p>}
          { placeOfBirth && <p>Place of birth: {data.place_of_birth}</p>}
          { alsoKnownAs && (
            <p>Also known as: {alsoKnownAs.slice(0, 3).join(", ")}{alsoKnownAs.length > 3 && "..."}</p>
          )}
          { homepage && <a href={homepage} target="_blank" rel="noreferrer" id="person-website-link">Official Website</a>}
        </div>
      </div>
      <div>
        { biography && (
          <section className="overview-section">
            <h2>Biography</h2>
            <p className="overview">{biography}</p>
          </section>)
        }
      </div>
    </div>
  );
}

export default PersonDetails;