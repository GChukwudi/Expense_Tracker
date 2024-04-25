import React, {createContext} from "react";
import axios from "axios";

const BASE_URL = "http://localhost:6000/api/v1/";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}