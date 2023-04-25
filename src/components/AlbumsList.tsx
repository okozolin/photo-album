import React, {useContext, useEffect, useState} from 'react';
import {Album, Photo, UserData} from '../types';
import AlbumItem from './AlbumItem';
import {fetchAlbums} from "../services/api";
import Header from "./Header";
import UsersContext from "../context/usersContext";
const AlbumsList: React.FC = () => {
    const usersData:UserData = useContext(UsersContext);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [expandedAlbumId, setExpandedAlbumId] = useState<number | null>(null);

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const data = await fetchAlbums();
                setAlbums(data);
            } catch (error) {
                console.error('Failed to fetch albums:', error);
            }
        };
        getAlbums();
    }, []);

    const handleExpandToggle = (albumId: number) => {
        setExpandedAlbumId(prevId => (prevId === albumId ? null : albumId));
    };

    const handlePhotoRemove = (albumId: number, photoId: number) => {
        // setAlbums((prevAlbums: Album[]) =>
        //     prevAlbums.map((album: Album) =>
        //         album.id === albumId
        //             ? { ...album, photos: album.photos.filter(photo => photo.id !== photoId) }
        //             : album
        //     )
        // );
    };

    const handlePhotoReorder = (albumId: number, photos: Photo[]) => {
        setAlbums((prevAlbums : Album[]) =>
            prevAlbums.map(album =>
                album.id === albumId ? { ...album, photos } : album
            )
        );
    };

    return (
        <div>
            <Header />
            {albums.map((album: Album) => (
                <AlbumItem
                    key={album.id}
                    album={album}
                    user={usersData[album.userId]}
                    expanded={album.id === expandedAlbumId}
                    onExpandToggle={handleExpandToggle}
                    onPhotoRemove={handlePhotoRemove}
                    onPhotoReorder={handlePhotoReorder}
                />
            ))}
        </div>
    );
};

export default AlbumsList;
