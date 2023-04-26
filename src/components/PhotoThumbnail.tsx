import React from 'react';
import { CiCircleRemove } from "react-icons/ci";


import {PhotoThumbnailProps} from '../types';

const PhotoThumbnail: React.FC<PhotoThumbnailProps> = ({
                                                           photo,
                                                           isDragging,
                                                           onRemove,
                                                           onDragStart,
                                                           onDragEnd,
                                                           onDragOver
                                                       }) => {
    const handleRemove = () => {
        console.log("XXX handleRemove in PhotoThumbnail============",photo.id )
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
            <img
                src={photo.thumbnailUrl}
                alt={`Photo: ${photo.title}`}
            />
            <CiCircleRemove
                style={{
                position: 'absolute',
                top: '3px',
                left: '130px',
                // padding: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'black',
                }}
                onClick={handleRemove}
            />
        </div>
    );
};

export default PhotoThumbnail;