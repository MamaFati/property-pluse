'use client'
import { createContext, useContext, useState, useEffect } from "react"
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/app/actions/getUnreadMessageCount";
// create context
const GlobalContext = createContext();
// create Provider
export default function GlobalProvider({children}){      
    const[unreadCount,setUreadCount] = useState(0);
    const {data:session} = useSession(0);

    useEffect(()=>{
        if(session && session.user){
            getUnreadMessageCount().then((res)=>{
                if(res.count) setUreadCount(res.count);

            })
        }
    },[getUnreadMessageCount,session])

    return(
        <GlobalContext.Provider value={{
            unreadCount,
            setUreadCount
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
export function useGlobalContext(){
    return useContext(GlobalContext);
}