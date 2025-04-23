

import { createContext , useState } from 'react'

const LoginContext = createContext()



const LoginProvider = ({ children }) => {

    let [loginStatus, setLoginStatus] = useState(false)

    return (
        <LoginContext.Provider value={{loginStatus , setLoginStatus}}>
            {children}
        </LoginContext.Provider>
    )
}


export { LoginContext, LoginProvider }
