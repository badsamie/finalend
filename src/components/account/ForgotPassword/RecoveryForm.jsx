import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recoverPassword } from './passwordRecoverySlice';


import { useNavigate } from 'react-router-dom';

function RecoveryForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recoveryStatus = useSelector((state) => state.passwordRecovery.status);
  const recoveryError = useSelector((state) => state.passwordRecovery.error);

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(recoverPassword(email))
      .then(() => {
        navigate("/voctonovlenie");
      });
  };
  return (
<div className="flex flex-col items-center">
  <h2 className='text-4xl text-violet-600 font-bold p-5 uppercase'>password recovery </h2>
  <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <label className='text-violet-600'>Email:</label>
    <input
      className="w-full p-2 m-2 border border-purple-500 rounded-md"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
    />
    <button className="w-full bg-violet-500 text-white p-2 rounded-md uppercase" type="submit">send</button>
  </form>
  {recoveryStatus === 'loading' && <div className='text-violet-600 uppercase'>sending a request...</div>}
  {recoveryStatus === 'succeeded' && <div className='text-violet-600 uppercase'>Request has been sent. check your email address for instructions.</div>}
  {recoveryStatus === 'failed' && <div  className='text-violet-600 uppercase'>error: {recoveryError}</div>}
</div>




  )


}

export default RecoveryForm;
