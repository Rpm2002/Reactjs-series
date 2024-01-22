import { createContext, useContext } from "react"

export const Themecontext=createContext({
  ThemeMode:"light",
  LightTheme: ()=>{},
  DarkTheme: ()=>{},
})

export const ThemeProvider=Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}