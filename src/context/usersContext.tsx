import React, { createContext } from 'react';
import {UserData} from "../types";

const UsersContext = createContext<UserData>({});

export default UsersContext;