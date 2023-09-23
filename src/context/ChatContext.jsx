import { createContext, useContext, useReducer } from "react";
import {AuthContext} from "./AuthContext"
export const ChatContext=createContext();

export const ChatContextProvider=({children})=>{
    const {CurrentUser}=useContext(AuthContext)
    const initialState={
        chatId:null,
        user:{},
    };
    const chatReducer=(state,action)=>{
        switch(action.type)
        {
            case "CHANGE_USER":
                return{
                    user:action.payload,
                    chatId:CurrentUser.uid>this.action.payload.uid?CurrentUser.uid+this.user.uid : this.user.uid+CurrentUser.uid
                }
            default:
                return state
            }
        }
    const [state,dispatch]=useReducer(chatReducer,initialState)
        return <ChatContext.Provider value={{data:state,dispatch}}>
        {children}
    </ChatContext.Provider>
}