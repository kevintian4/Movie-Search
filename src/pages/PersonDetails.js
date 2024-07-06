import { useParams } from 'react-router-dom';

function PersonDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Person Details</h1>
            <p>Person ID: {id}</p>
        </div>
    );
}

export default PersonDetails;