import React from 'react';
import csv from '../data/csvFile.csv';

function BluckUserLabEnv() {
    //   console.log(csv);

    const existingUser = [
        {'email':'janesmith@example.com'},
        {'email':'johndoe@example.com '}
    ]
    
    function CheckMail(email) {
        return existingUser.some((user) => user.email === email);
    }
    

    return (
        <div>
            <div>hi</div>
            {csv.map((value, index) => (
                <div key={index}
                className='hover:bg-gray-500 '
                onClick={() => alert(`id: ${value.id} Name: ${value.Name} email:${value.email} `)}
                >
                    <ul>
                        <li>id: {value.id}</li>
                        <li>name: {value.Name} </li>
                        <li>email: {value.email} </li>
                        <li>existingUser: {`${CheckMail(value.email)}`}</li>

                    </ul>
                </div>
            ))}
        </div>
    );
}

export default BluckUserLabEnv;
