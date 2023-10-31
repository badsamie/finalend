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
    <div>
      <h2>Восстановление пароля</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Отправить</button>
      </form>
      {recoveryStatus === 'loading' && <div>Отправка запроса...</div>}
      {recoveryStatus === 'succeeded' && <div>Запрос отправлен. Проверьте свой email для получения инструкций.</div>}
      {recoveryStatus === 'failed' && <div>Ошибка: {recoveryError}</div>}
    </div>
  );
}

export default RecoveryForm;
