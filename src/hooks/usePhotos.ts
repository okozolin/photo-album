import { useEffect, useState } from 'react';
import { fetchPhotos } from "../services/api";
// Custom hook to fetch photos for a specific album
export const usePhotos = (albumId: number) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPhotos(albumId);
                setPhotos(data);
                setLoading(false);
            } catch (error) {
                console.error(`Failed to fetch photos for album ${albumId}`, error);
                setLoading(false);
            }
        };

        fetchData();
    }, [albumId]);

    return { photos, loading };
};