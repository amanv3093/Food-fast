import { createContext , useContext, useState } from "react";

export const FoodContext = createContext();
export const UseFoodContext = () =>{
    return useContext(FoodContext);
}
export const FoodProvider = (props) =>{
    let [data , setData] =useState('aman')
    return(
        <FoodContext.Provider value={{data}}>
            {props.children}
        </FoodContext.Provider>
    )

}