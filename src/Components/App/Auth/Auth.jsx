import { useContext } from "react";
import { createContext, useEffect } from "react"
import { useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('')

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [children])

    return(
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth }