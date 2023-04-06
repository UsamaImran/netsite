import * as React from 'react';
import { createContext, useContext } from "react";
import { MediaQuery } from "../types/mediaQuery.types";
import useMediaQuery from "../hooks/mediaQueryHook";

const IsPhoneContext = createContext(false);

const useIsPhoneContext = () => useContext(IsPhoneContext);

interface IIsPhoneProviderProps {  }

const IsPhoneProvider:React.FC<IIsPhoneProviderProps> = (props) => {
    const isPhone = useMediaQuery(MediaQuery.phone);
    return (
        <IsPhoneContext.Provider value={isPhone}>
            {
                props.children
            }
        </IsPhoneContext.Provider>
    );
}


export {IsPhoneProvider, useIsPhoneContext}