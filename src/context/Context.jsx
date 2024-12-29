import React, { createContext, useState } from 'react'

export const mycontext = createContext()
function Context({children}) {

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    return (
        <mycontext.Provider value={{currentMonth,setCurrentMonth,currentYear,setCurrentYear}}>
            {children}
        </mycontext.Provider>

    )
}

export default Context