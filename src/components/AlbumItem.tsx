import React, {useState} from 'react';
import { MdExpandLess } from "react-icons/md";
import {Album, Photo, User} from '../types';
import PhotoThumbnail from './PhotoThumbnail';
import styled from "styled-components";
import {platformColors} from "../constants/colors";

interface AlbumItemProps {
    album: Album;
    user: User,
    expanded: boolean;
    onExpandToggle: (albumId: number) => void;
    onPhotoRemove: (albumId: number, photoId: number) => void;
    onPhotoReorder: (albumId: number, photos: Photo[]) => void;
}

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  border: 1px solid ${platformColors.darkGrey};
  padding: 10px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const AlbumName = styled(Column)`
  flex-basis: 40%;
`;

const AlbumID = styled(Column)`
  flex-basis: 10%;
`;

const UserName = styled(Column)`
  flex-basis: 20%;
`;

const UserEmail = styled(Column)`
  flex-basis: 20%;
`;

const ExpandCollapse = styled(Column)`
  flex-basis: 10%;
`;

const AlbumItem: React.FC<AlbumItemProps> = ({
                                                 album,
                                                 user ,
                                                 expanded,
                                                 onExpandToggle,
                                                 onPhotoRemove,
                                                 onPhotoReorder
                                             }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [reorderedPhotos, setReorderedPhotos] = useState<Photo[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    // useEffect(() => {
    //     const getPhotos = async () => {
    //         try {
    //             const data = await fetchPhotos(album.id);
    //             setPhotos(data);
    //             setReorderedPhotos(data);
    //         } catch (error) {
    //             console.error(`Failed to fetch photos for album with ID ${album.id}:`, error);
    //         }
    //     };
    //     getPhotos();
    // }, [album.id]);

    const handleExpandToggle = () => {
        onExpandToggle(album.id);
    };

    const handlePhotoRemove = (photoId: number) => {
        onPhotoRemove(album.id, photoId);
    };

    const handlePhotoDragStart = (photoId: number) => {
        setIsDragging(true);
    };

    const handlePhotoDragEnd = () => {
        setIsDragging(false);
        onPhotoReorder(album.id, reorderedPhotos);
    };

    const handlePhotoDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const dragOverPhotoId = Number(event.currentTarget.getAttribute('data-photo-id'));
        const draggedPhotoId = Number(event.dataTransfer.getData('text/plain'));

        if (dragOverPhotoId !== draggedPhotoId) {
            setReorderedPhotos(prevPhotos => {
                const updatedPhotos = [...prevPhotos];
                const draggedPhotoIndex = updatedPhotos.findIndex(photo => photo.id === draggedPhotoId);
                const dragOverPhotoIndex = updatedPhotos.findIndex(photo => photo.id === dragOverPhotoId);

                [updatedPhotos[draggedPhotoIndex], updatedPhotos[dragOverPhotoIndex]] = [
                    updatedPhotos[dragOverPhotoIndex],
                    updatedPhotos[draggedPhotoIndex]
                ];

                return updatedPhotos;
            });
        }
    };

    return (
        <Row>
            <AlbumName>
                {album?.title}
            </AlbumName>
            <AlbumID>
                {album?.id}
            </AlbumID>
            <UserName>
                {user?.name}
            </UserName>
            <UserEmail>
                {user?.email}
            </UserEmail>
            <ExpandCollapse
                style={{ cursor: 'pointer', padding:"9px 10px 10px"}}
                onClick={handleExpandToggle}
            >
                <MdExpandLess />
                {/*{user?.email}*/}
            </ExpandCollapse>
            {expanded && (
                <div>
                    {photos.map(photo => (
                        <PhotoThumbnail
                            key={photo.id}
                            photo={photo}
                            isDragging={isDragging}
                            onRemove={handlePhotoRemove}
                            onDragStart={handlePhotoDragStart}
                            onDragEnd={handlePhotoDragEnd}
                            onDragOver={handlePhotoDragOver}
                        />
                    ))}
                </div>
            )}
        </Row>
    );
};

export default AlbumItem;