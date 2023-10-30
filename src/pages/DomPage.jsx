import React from 'react';
import { useNavigate } from 'react-router-dom';

const DomPage = () => {
  const navigate = useNavigate();

  // Обработчик для перехода на страницу "Чаты"
  const goToChats = () => {
    navigate('/chats');
  };

  // Обработчик для перехода на страницу "Профиль"
  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen p-4 bg-purple-100">
        <h2 className="text-xl font-bold text-white">Polyglot</h2>
        <ul>
          <li onClick={goToChats} className="cursor-pointer text-blue-500 hover:text-blue-700">Чаты</li>
          <li onClick={goToProfile} className="cursor-pointer text-blue-500 hover:text-blue-700">Профиль</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-4 bg-white">
        {/* Основное содержимое страницы */}
      </div>
    </div>
  );
};

export default DomPage;
