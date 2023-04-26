import React from 'react';
import { CiCircleRemove } from "react-icons/ci";


import {PhotoThumbnailProps} from '../types';
import Tooltip from "./Tooltip";
import styled from "styled-components";

const CiCircleRemoveStyled = styled(CiCircleRemove)`
  position: absolute;
  top: 3px;
  left: 130px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  z-index: 2;
`

const PhotoThumbnail: React.FC<PhotoThumbnailProps> = ({
                                                           photo,
                                                           isDragging,
                                                           onRemove,
                                                           onDragStart,
                                                           onDragEnd,
                                                           onDragOver
                                                       }) => {
    const handleRemove = () => {
        onRemove(photo.id);
    };

    const handleDragStart = () => {
        onDragStart(photo.id);
    };

    const handleDragEnd = () => {
        onDragEnd();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        onDragOver(event);
    };

    return (
        <div
            style={{
                opacity: isDragging ? 0.5 : 1,
                position: 'relative',
            }}
            draggable={true}
            // onDrag
            // Start={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            data-photo-id={photo.id}
        >
            <Tooltip title={photo.title}>
                <img
                    src={photo.thumbnailUrl}
                    alt={`Photo: ${photo.title}`}
                />
            </Tooltip>
            <CiCircleRemoveStyled
                onClick={handleRemove}
            />
        </div>
    );
};

export default PhotoThumbnail;