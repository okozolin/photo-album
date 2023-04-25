import { useEffect, useState } from 'react';
import { Album, UseAlbumsResult } from '../types';
import { fetchAlbums } from "../services/api";


// Custom hook to fetch albums

const useAlbums = (): UseAlbumsResult => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const fetchAlbums = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  //       const data = await response.json();
  //       setAlbums(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchAlbums();
  // }, []);
  //
  // return { albums, isLoading, error };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchAlbums();
          setAlbums(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Failed to fetch albums", error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    return { albums, setAlbums, isLoading };
};

export default useAlbums;


// export const useAlbums = () => {
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchAlbums();
//         setAlbums(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch albums", error);
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//   }, []);
//
//   return { albums, loading };
// };
