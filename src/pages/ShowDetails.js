import { useParams } from 'react-router-dom';

function ShowDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Show Details</h1>
            <p>Show ID: {id}</p>
        </div>
    );
}

export default ShowDetails;