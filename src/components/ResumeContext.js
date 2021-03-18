import React, {useState, createContext} from 'react'

export const ResumeContext = createContext();

const ResumeProvider = (props) => {

    const [final, setFinal] = useState({
        user: {},
        education: {},
        experience: {},
        skillSet: {}
    });
    return (
       <ResumeContext.Provider value={[final, setFinal]}>
           {props.children}
       </ResumeContext.Provider>
    )
}

export default ResumeProvider
