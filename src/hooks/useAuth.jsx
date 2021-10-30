// import { Children } from "react";
import { useContext } from "react";
import { MainContext } from "../App";


export const useAuth = () => useContext(MainContext)
