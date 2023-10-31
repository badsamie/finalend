import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from './resetPasswordActions'; 
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const resetStatus = useSelector((state) => state.resetPassword.status);
  const resetError = useSelector((state) => state.resetPassword.error);

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const handleResetPassword = () => {
    dispatch(resetPassword({ code, new_password: newPassword, new_password_confirm: newPasswordConfirm }));
  };
  return (
    <div className="text-center">
  <h2 className="text-4xl text-violet-500 font-bold p-5 uppercase">recovery password</h2>
  <form onSubmit={handleResetPassword} className="text-left w-80 mx-auto">
    <div className="mb-4">
      <label className="block text-violet-600">code from email:</label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full p-2 border text-violet-600 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block text-violet-600">new password:</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full p-2 border border-purple-900 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label className="block text-violet-600 ">confirm new password:</label>
      <input
        type="password"
        value={newPasswordConfirm}
        onChange={(e) => setNewPasswordConfirm(e.target.value)}
        className="w-full p-2 border border-purple-900 rounded-md"
      />
    </div>
    <button type="submit" className="w-full bg-violet-500 text-white p-2 rounded-md uppercase">recover Password</button>
  </form>
  {resetStatus === 'loading' && <div  className='text-violet-600'>sending a request...</div>}
  {resetStatus === 'succeeded' && <div  className='text-violet-600'>password successfully restored.</div>}
  {resetStatus === 'failed' && <div className='text-violet-600'>error: {resetError}</div>}
</div>
  );
}

export default ResetPassword;
