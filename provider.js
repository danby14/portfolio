import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = (props) => {
  const [isDark, setTheme] = useState(false)

  return (
    <myContext.Provider
      value={{
        isDark,
        changeTheme: () => setTheme(!isDark),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

const providerFunction = ({ element }) => <Provider>{element}</Provider>
export default providerFunction
