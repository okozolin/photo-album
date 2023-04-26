import React from "react";

export interface Album {
    userId: number
    id: number;
    title: string;
}
export interface UseAlbumsResult {
    albums: Album[];
    setAlbums: any;
    isLoading: boolean;
    // error: Error | null;
}
export interface AlbumItemProps {
    album: Album;
    user: User;
    photos: Photo[];
    expanded: boolean;
    onExpandToggle: (albumId: number) => void;
    onPhotoRemove: (albumId: number, photoId: number) => void;
    onPhotoReorder: (albumId: number, photos: Photo[]) => void;
}
export interface Photo {
    id: number;
    title: string;
    thumbnailUrl: string;
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
}

export interface PhotoThumbnailProps {
    photo: Photo;
    isDragging: boolean;
    onRemove: (photoId: number) => void;
    onDragStart: (photoId: number) => void;
    onDragEnd: () => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}


export type UserData = {
    [id: number]: User; // Add index signature for number type
};