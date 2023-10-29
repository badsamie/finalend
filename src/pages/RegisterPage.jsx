import React from 'react'
import Register from '../components/account/Register'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
     const navigate = useNavigate()
  return (
    
    <div className='con'>
        <h1> Привет! Добро Пожаловать в Polyglot</h1>
        <p>Как тебя зовут?</p>
        <div>
            <input type="text"
            placeholder='Майкл' />
            <input type="text"
            placeholder='Джордан' />
            <button onClick={() => navigate("/register")}>Продолжить регистрацию</button>
        </div>
    </div>
  )
}

export default RegisterPage