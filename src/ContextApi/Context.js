import React, { createContext, useContext, useReducer,useEffect } from 'react'
import reducer from './reducer';

const initialState = {
    isLoading: true,
    query: '',
    location:[],
    current:[]
}

let API = "http://api.weatherstack.com/current?access_key=3a93d6f6a38c720fc79fcb7653bb04c0";
const ApiContext = createContext();

const ApiProvider = ({children}) =>{

    const [state, dispatch]= useReducer(reducer, initialState)
    const fetchApiData = async (url) => {
        dispatch({type: "SET_LOADING"})
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            dispatch({type: "GET_DATA", payload:{
                location: data.location,
                current: data.current,
            }})
            //isloading = false
        }catch(error){
            console.log(error)
        }
    }

    // search
    const searchL = (e) =>{
        dispatch({type: "SEARCH_LOCATION", payload:e })
        fetchApiData(`${API}&query=${e}`);
    }
    useEffect(() => {
        fetchApiData(`${API}&query=Kolkata`);
    },[])

    return <ApiContext.Provider value={{...state, searchL}}>{children}</ApiContext.Provider>
}

// craeting my own custom hook i.e useGlobalContext
const useGlobalContext = () =>{
    return useContext(ApiContext);
}

export {ApiContext , ApiProvider , useGlobalContext};