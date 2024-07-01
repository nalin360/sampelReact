import React, { memo } from 'react';
import Inputss from './Inputss';

const UserComponent = memo(({ user, handleLabEnvChange }) => {
  return (
    <li key={user.id} className='flex flex-row gap-4 p-2 text-lg'  >
      <div className='flex flex-row gap-4'>
        <p>Name: {user.name}</p>
        <p>Email: ({user.email})</p>
        <p>Lab Env: {user.lab_env}</p>
      </div>
      <Inputss
        className='text-black'
        type="number"
        value={user.lab_env}
        placeholder="lab Env"
        onChange={handleLabEnvChange}
      />
    </li>
  );
});

export default UserComponent;
