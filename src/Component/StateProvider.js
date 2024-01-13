import React,{createContext,useContext,useReducer} from "react";

// Prepars the dataLayer
export const StateContext = createContext();

//wrap out app and provide the Dats layer
export const StateProvider = ({reducer, initialState,children}) =>(
          <StateContext.Provider value={useReducer(reducer,initialState)}> {children}
          </StateContext.Provider>
)

//Push and pull information from the data layer
export const useStateValue = () => useContext(StateContext)