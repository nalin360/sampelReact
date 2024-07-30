// src/pages/BluckUserLabEnv.jsx 
import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import csv from "../data/csvFile.csv";
import UserComponent from '../components/ui/UserComponent';
const initialState = [
    {
        id: "1",
        name: "Jane Smith",
        email: "janesmith@example.com",
        temp_password: "Abc456!$%",
        lab_env: "2"
    }
];

const reducerEnv = (state = [], { type, payload }) => {
    switch (type) {
        case 'updated_user':
            return state.map((user, index) => {
                if (index === payload.index) {
                    return { ...user, lab_env: payload.value };
                }
                return user;
            });
        case 'initialize':
            // removing the exiting user
            return csv.filter(user => !initialState.some(e => e.email === user.email));
        default:
            return state;
    }
};

function BluckUserLabEnv() {

    const [state, dispatch] = useReducer(reducerEnv, initialState);

    useEffect(() => {
        // console.log("useEffect");
        dispatch({ type: 'initialize', payload: initialState });
    }, [csv]);

    const handleLabEnvChange = useCallback((index, value) => {
        // console.log("handleLabEnvChange");
        dispatch({ type: 'updated_user', payload: { index, value } });
    }, []);


    
// const user = useMemo() => {
//       return (
//         <div>BluckUserLabEnv</div>
//       )
//     }
    
    return (
        <div>
            <ul>
                {state.map((user, index) => (
                    <UserComponent key={index} user={user} handleLabEnvChange={e => handleLabEnvChange(index, e.target.value)} />
                // <user/>
                ))}
            </ul>
        </div>
    );
}

export default BluckUserLabEnv;
