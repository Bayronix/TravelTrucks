import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../../redux/campers/campersSlice';
import { RootState, AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

const CampersList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state: RootState) => state.campers);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Campers List</h2>
            {Array.isArray(data) && data.length > 0 ? (
                <ul>
                    {data.map((camper) => (
                        <li key={camper.id}>
                            <div>
                                {camper.gallery.length > 0 && (
                                    <img
                                        src={camper.gallery[0].thumb}
                                        alt={camper.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </div>
                            <div>
                                <h3>{camper.name}</h3>
                                <p>Price: ${camper.price}</p>
                                <p>⭐Rating: {camper.rating}</p>
                                <p>Location: {camper.location}</p>
                                <p>Description: {camper.description}</p>
                                {camper.transmission && <p>Transmission</p>}
                                {camper.engine && <p>Engine</p>}
                                {camper.kitchen && <p>Kitchen</p>}
                                {camper.AC && <p>AC</p>}
                                {camper.TV && <p>TV</p>}
                                {camper.bathroom && <p>Bathroom</p>}
                                {camper.form && <p>{camper.form}</p>}
                                <button onClick={() => navigate(`/campers/${camper.id}`)}>Show More</button> {/* Navigate to detail */}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No campers available</p>
            )}
        </div>
    );
};

export default CampersList;
