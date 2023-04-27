import React, {useContext, useEffect, useState} from 'react';
import {Album, Photo, UserData} from '../types';
import AlbumItem from './AlbumItem';
import {fetchAlbums, fetchPhotos} from "../services/api";
import UsersContext from "../context/usersContext";
import Row from "./Row";
import {platformColors} from "../constants/colors";
import {sizes} from "../constants/sizes";

const header = [
    {
        content: "Album Name",
        width: sizes.albumNameWidth,
        color: platformColors.lila
    },
    {
        content: "Album ID",
        width: sizes.albumIdWidth,
        color: platformColors.lila
    },
    {
        content: "User Name",
        width: sizes.userNameWidth,
        color: platformColors.lila
    },
    {
        content: "User Email",
        width: sizes.userEmailWidth,
        color: platformColors.lila
    },
    {
        content: "Expand/Collapse",
        width: sizes.expandCollapseWidth,
        color: platformColors.lila
    },

]
const AlbumsList: React.FC = () => {
    const usersData:UserData = useContext(UsersContext);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [expandedAlbumId, setExpandedAlbumId] = useState<number | null>(null);
    const [photos, setPhotos] = useState<Photo[]>([]);

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

    useEffect(() => {
        const getPhotos = async () => {
            try {
                if (expandedAlbumId !== null) {
                    const data = await fetchPhotos(expandedAlbumId);
                    setPhotos(data);
                    // setReorderedPhotos(data);
                }
            } catch (error) {
                console.error(`Failed to fetch photos for album with ID ${expandedAlbumId}:`, error);
            }
        };
        getPhotos();
    }, [expandedAlbumId]);

    const handleExpandToggle = (albumId: number) => {
        setExpandedAlbumId(prevId => (prevId === albumId ? null : albumId));
    };

    const handlePhotoRemove = (albumId: number, photoId: number) => {
        setPhotos((prevPhotos: Photo[]) =>
            prevPhotos.filter(photo => photo.id !== photoId)
        );
    };

    const handlePhotoReorder = (result: any) => {
        const {destination, source} = result
        if (!destination) {
            return
        }

        // check if the user simply moved the item and returned back to the same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }
        const items = Array.from(photos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPhotos(items);
    }

    return (
        <div>
            <Row fields={header} />
            {albums.map((album: Album) => (
                <AlbumItem
                    key={album.id}
                    album={album}
                    user={usersData[album.userId]}
                    photos={photos}
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
