import React, { use } from 'react'
import { AuthContext } from '../contexts/Authcontext'

function Profiles() {
    const {user} = use(AuthContext);
    console.log(user);
  return (
    <div className='max-w-sm mx-auto border border-gray-500 shadow-md rounded mt-12 p-5'>
        <h2 className='text-xl font-bold mb-5 text-blue-500'>User Information:</h2>
        <p><span className='font-semibold text-green-500'>Email:</span> {user.email}</p>
    </div>
  )
}

export default Profiles