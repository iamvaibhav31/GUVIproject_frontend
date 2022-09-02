import React, { createContext, useState } from "react";
import Axios from "../Features/Apis/Axios";


const Context = createContext();
export default Context

export const Provider = ({ children }) => {
     const [data, setData] = useState()
     const [loading, setLoading] = useState()
     const [error, setError] = useState()


     const RegisterUsers = async (data) => {
          await Axios.post('/login', data).then(() => {

          }).catch(() => {

          }).finally(() => {

          })

          return { loading, error, value }
     }


     const LoginUsers = async (data) => {
          await Axios.post('/login', data).then(() => {

          }).catch(() => {

          }).finally(() => {

          })

          return { loading, error, value }
     }


     const value = {
          RegisterUsers,
          LoginUsers,
     }

     return (
          <Context.Provider value={value}>
               {children}
          </Context.Provider>
     );
};

