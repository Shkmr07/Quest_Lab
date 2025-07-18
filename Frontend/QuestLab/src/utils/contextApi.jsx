import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ContextProvider = ({children})=>{
    const initialState = {
        firstName : "",
        lastName : "",
        role : "",
        image : "",
        linkedin : "",
        twitter : ""

    }
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [modal,setModal] = useState(false)
    const [inp,setInp] = useState(initialState)

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://quest-lab.onrender.com/api/form");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result.details);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[])

    return (
        <ApiContext.Provider value={{data,loading,error,modal,setModal,inp,setInp,initialState}}>
            {children}
        </ApiContext.Provider>
    )

}

