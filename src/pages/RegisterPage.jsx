import React from 'react'
import Register from '../components/account/Register'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
     const navigate = useNavigate()
     return (
      <div className="p-4 text-center -mt-36">
        <h1 className="text-3xl font-bold mt-56 text-violet-500 uppercase"> wellcome to the Polyglot</h1>
        <p className="mt-4 text-lg text-violet-400 uppercase font-bold">What's your name?</p>
        <div className="mt-9 flex flex-col items-center">
          <input type="text" placeholder="Майкл" className="border w-2/6 p-2 mb-4 rounded text-center lowercase text-violet-500" />
          <input type="text" placeholder="Джордан" className="border w-2/6 p-2 mb-4 rounded text-center lowercase text-violet-500" />
          <button
            onClick={() => navigate("/register")}
            className="w-64 mt-9 bg-violet-400 hover:bg-violet-500 text-white px-4 py-2 rounded uppercase font-bold"
          >
            Continue registration
          </button>
        </div>
      </div>
    );
    
    
    
    

}

export default RegisterPage