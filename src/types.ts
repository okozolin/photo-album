import React from "react";

export interface Album {
    userId: number
    id: number;
    title: string;
}

export interface AlbumItemProps {
    album: Album;
    user: User;
    photos: Photo[];
    expanded: boolean;
    onExpandToggle: (albumId: number) => void;
    onPhotoRemove: (albumId: number, photoId: number) => void;
    onPhotoReorder: (result: any) => void;
}
export interface Photo {
    id: number;
    title: string;
    thumbnailUrl: string;
    url: string;
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
    index: number
    onRemove: (photoId: number) => void;
    onPhotoClick: (photoId: number) => void;
}

export interface TooltipProps {
    title: string;
    children: React.ReactNode;
}

export interface Field {
    content: string;
    width: string;
    color: string
}

export interface RowProps {
    fields: Field[]
}

export interface FieldWidth {
    width: string;
}

export interface PhotoGridProps {
    photos: Photo[];
    onPhotoReorder: (result: any) => void;
    onRemove: (result: any) => void;
    onPhotoClick: (result: any) => void;

}

export interface FullSizePhotoProps {
    selectedPhoto : Photo;
    onPhotoCloseClick: () => void;
}

export type UserData = {
    [id: number]: User; // Add index signature for number type
};