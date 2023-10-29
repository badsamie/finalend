import React from 'react'
import Register from '../components/account/Register'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
     const navigate = useNavigate()
     return (
      <div className="con p-4 text-center">
        <h1 className="text-2xl font-bold mt-4">Привет! Добро Пожаловать в Polyglot</h1>
        <p className="mt-4 text-lg">Как тебя зовут?</p>
        <div className="mt-4 flex flex-col items-center">
          <input type="text" placeholder="Майкл" className="w-64 p-2 border rounded-md mb-2" />
          <input type="text" placeholder="Джордан" className="w-64 p-2 border rounded-md mb-2" />
          <button
            onClick={() => navigate("/register")}
            className="w-64 bg-purple-500 text-white px-4 py-2 rounded-full"
          >
            Продолжить регистрацию
          </button>
        </div>
      </div>
    );
    
    
    
    

}

export default RegisterPage