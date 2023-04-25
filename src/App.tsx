import React, { useEffect, useState } from 'react';
import { MdFace } from "react-icons/md";
import styled from 'styled-components';

import AlbumsList from './components/AlbumsList';
import { platformColors } from './constants/colors'
import { fetchUsers } from "./services/api";
import UsersContext from './context/usersContext'
import { data2Dictionary } from "./utils/data2Dictionary";
import {UserData} from "./types";

const MyLogo = styled.div`
  color: ${platformColors.lightPink}
`;

const App: React.FC = () => {
    const [users, setUsers] = useState<UserData>({});
    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                const dict: UserData = data2Dictionary(data)
                setUsers(dict);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        getUsers();
    }, []);

    return (
        <UsersContext.Provider value={users}>
          <MyLogo>
             <MdFace color={platformColors.lightPink}/>
              oritkozolin 2023
          </MyLogo>
          <h1>Albums</h1>
          <AlbumsList />
        </UsersContext.Provider>
  );
};

export default App;
