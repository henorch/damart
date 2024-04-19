import { useMutation } from "@apollo/client";
import { createContext, useContext, useState } from "react";
import { LOGIN_USER, REG_USER } from "../src/utils/config/graphql/mutatuon";

const UserConetxt = createContext();

export const USerProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [signInMutation] = useMutation(LOGIN_USER)
    const [registerMutation] = useMutation(REG_USER)

    const register = async (input) => {
        try {
            const { data } = await registerMutation({
                variables:{input}
            })

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
  

    const signIn = async (username, password) => {

        try {
            const result = await signInMutation({
                variables: {
                    username,
                    password,
                }
            });
            const  user  = result.data.loginUser;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user))
            setUser(user)
        } catch (error) {
            console.error(error)
        }
    }

    

    return <UserConetxt.Provider value={{
        user, 
        setUser, 
        signIn,
        register
    }}>{children}</UserConetxt.Provider>
}


export const useUsercontext = () => useContext(UserConetxt)