import React from 'react';
import { Photo } from '../types';

interface PhotoThumbnailProps {
    photo: Photo;
    isDragging: boolean;
    onRemove: (photoId: number) => void;
    onDragStart: (photoId: number) => void;
    onDragEnd: () => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

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
                border: '1px solid #000',
                padding: '8px',
                marginBottom: '8px'
            }}
            draggable={true}
            // onDrag
            // Start={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            data-photo-id={photo.id}
        >
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default PhotoThumbnail;