import React, { useCallback, useEffect, useMemo, useState } from 'react';
import csv from "../data/csvFile.csv";
import UserComponent from '../components/ui/UserComponent';

function BluckUserLabEnv() {
    const [user, setUser] = useState([
        {
            id: "1",
            name: "Jane Smith",
            email: "janesmith@example.com",
            temp_password: "Abc456!$%",
            lab_env: "2"
        }
    ]);

    const checkExistingUser = useMemo(() => {
        return csv.filter(element => user.find(e => e.email !== element.email));
    }, [csv]);

    useEffect(() => {
        // console.log("useEffect");
        setUser(checkExistingUser);
    }, [csv]);

    const handleLabEnvChange = useCallback((index, value) => {
        // console.log("handleLabEnvChange");
        setUser(user.map((user, i) => {
            if (i === index) {
                return { ...user, lab_env: value };
            }
            return user;
        }));
    }, [user]);

    // console.log(csv);

    return (
        <div >
            <ul>
                {user.map((user, index) => (
                    <UserComponent key={index} user={user} handleLabEnvChange={e => handleLabEnvChange(index, e.target.value)} />
                ))}
            </ul>
        </div>
    );
}

export default BluckUserLabEnv;
