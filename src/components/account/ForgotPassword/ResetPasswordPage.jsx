import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from './resetPasswordActions'; 

function ResetPassword() {
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
    <div>
      <h2>Восстановление пароля</h2>
      <form onSubmit={handleResetPassword}>
        <label>Код из почты:</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        <label>Новый пароль:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <label>Подтвердите новый пароль:</label>
        <input type="password" value={newPasswordConfirm} onChange={(e) => setNewPasswordConfirm(e.target.value)} />
        <button type="submit">Восстановить пароль</button>
      </form>
      {resetStatus === 'loading' && <div>Отправка запроса...</div>}
      {resetStatus === 'succeeded' && <div>Пароль успешно восстановлен.</div>}
      {resetStatus === 'failed' && <div>Ошибка: {resetError}</div>}
    </div>
  );
}

export default ResetPassword;
