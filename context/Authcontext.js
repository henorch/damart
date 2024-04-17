import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)

    const isLogin = async (email, password) => {
        const token = 'tshjniaskjxshbtxfsgxhusjhx';
        await AsyncStorage.setItem('userToken', token)
        setUser({ email, firstname, token})

    }

    const isLogout = async () => {
        await AsyncStorage.removeItem('userToken')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, isLogin, isLogout }}>{ children } </AuthContext.Provider>
    )
}

