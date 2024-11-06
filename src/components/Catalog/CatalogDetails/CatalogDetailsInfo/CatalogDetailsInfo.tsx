import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchCampers } from '../../../../redux/campers/campersSlice';
import { AppDispatch } from '../../../../redux/store';
import { useCampersSelector } from '../../../../redux/campers/campersSelector';

const CatalogDetailsInfo: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useCampersSelector();

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
            <p>⭐{camper.rating}</p>
            <p>{camper.location}</p>
            <p> ${camper.price}</p>
            {camper.gallery.map((image) => (
                <img key={image.original} src={image.thumb} alt={camper.name} />
                ))}
            <p>{camper.description}</p>
        </div>
    );
};

export default CatalogDetailsInfo;

