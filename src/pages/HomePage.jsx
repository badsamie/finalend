import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className=" bg-blue-400  h-screen ">
  <h1 className="font-mono font-bold text-2xl ml-40 text-white ">Polyglot</h1>
  <div className='flex flex-col justify-center items-center mt-20'>
  <span className=' text-white text-center text-2xl font-bold max-w-lg '>
    Учите языки бесплатно, весело и эффективно вместе с Polyglot!
  </span>
  <div className="flex flex-col items-center">

    <button onClick={() => navigate('/registerPage')} className='cursor-pointer bg-purple-400 text-white text-center text-2xl font-bold my-4 rounded-full py-2 px-4 w-80'>
      Начать
    </button>
    <button onClick={() => navigate("/login")} className="bg-purple-400 text-white text-center text-2xl font-bold rounded-full py-2 px-4 w-70">
      У меня уже есть аккаунт
    </button>
   
  </div>
  </div>
</div>



  )
}

export default HomePage