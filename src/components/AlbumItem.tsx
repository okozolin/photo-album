import React, {useState} from 'react';
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";

import {AlbumItemProps, Photo} from '../types';
import styled from "styled-components";
import {platformColors} from "../constants/colors";
import PhotoGrid from "./Photos/PhotoGrid";
import FullSizePhoto from "./Photos/FullSizePhoto";

const MAX_PHOTOS_TO_DISPLAY = 12
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
                                                 photos,
                                                 expanded,
                                                 onExpandToggle,
                                                 onPhotoRemove,
                                                 onPhotoReorder
                                             }) => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | undefined>();
    const handlePhotoClick = (photoId: number) => {
        const selected = photos.find((p) => p.id === photoId)
        setSelectedPhoto(selected);
    };

    const handlePhotoCloseClick = () => {
        setSelectedPhoto(undefined);
    };

    const handleExpandToggle = () => {
        onExpandToggle(album.id);
    };

    const handlePhotoRemove = (photoId: number) => {
        onPhotoRemove(album.id, photoId);
    };

    return (
        <>
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
                    {expanded ? <MdExpandLess /> : <MdOutlineExpandMore/>}
                </ExpandCollapse>
            </Row>

            {expanded && (
                <>
                    <PhotoGrid
                        photos={photos.slice(0, MAX_PHOTOS_TO_DISPLAY)}
                        onPhotoReorder={onPhotoReorder}
                        onRemove={handlePhotoRemove}
                        onPhotoClick={handlePhotoClick}
                    />
                    {selectedPhoto && (
                        <FullSizePhoto
                            selectedPhoto={selectedPhoto}
                            onPhotoCloseClick={handlePhotoCloseClick} />
                    )}

                </>
            )}
        </>
    );
};

export default AlbumItem;