import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";


export const UserContext=createContext({})


export function UserContextProvider({children}){
    const [user,setUser]=useState(null)

    useEffect(()=>{
      getUser()

    },[])

    const getUser=async()=>{
      try{
        //error
        const res=await axios.get("/api/auth/refetch",{withCredentials:true})
        //
        

        console.log(res.data)
        setUser(res.data)

      }
      catch(err){
        console.log(err)
      }
    }
    
    return (<UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>)
}