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

export type UserData = {
    [id: number]: User; // Add index signature for number type
};