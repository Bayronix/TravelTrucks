import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchCampers } from '../../../../redux/campers/campersSlice';
import { RootState, AppDispatch } from '../../../../redux/store';

const CamperDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.campers);

    useEffect(() => {
        dispatch(fetchCampers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const camper = data.find((camper) => camper.id === id);

    if (!camper) return <p>Camper not found</p>;

    return (
        <div>
            <h2>{camper.name}</h2>
            {camper.gallery.length > 0 && (
                <img
                    src={camper.gallery[0].thumb}
                    alt={camper.name}
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
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
        </div>
    );
};

export default CamperDetail;

