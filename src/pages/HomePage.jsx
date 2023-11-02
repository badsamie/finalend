import React from "react";
import { useNavigate } from "react-router-dom";
import planet from "./images/planet-duo-removebg-preview.png";
import planet2 from "./images/violet-planet-removebg-preview.png";
import kaban from "./images/photo_2023-10-31_16.43.40-removebg-preview.png";
import Footer from "../components/ui/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountrySlider from "./CountrySlider";


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
 
      <div className="flex h-screen items-center -mt-36">
        <div className="flex-1 flex justify-center">
          <img src={planet2} alt="planet-polyglot" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <span className="text-violet-500 text-center text-3xl font-bold uppercase">
            Learn a language for free with Polyglot!
          </span>
          <div className="flex flex-col items-center mt-8">
            <button
              onClick={() => navigate("/registerPage")}
              className="cursor-pointer bg-violet-400 text-white text-center text-2xl font-light uppercase my-4 rounded py-2 px-4 w-80 hover:bg-violet-500"
            >
              get started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-transparent border border-violet-600 text-violet-500 text-center text-xl  rounded py-2 px-4 w-80 font-light uppercase hover:bg-white hover:text-violet-500"
            >
              i already have an account
            </button>
          </div>
        </div>
      </div>


     <div className="bg-white p-10 mb-24">
        <div className="container mx-auto flex ">
        <img src={kaban} alt="" className="w-64 h-64" />
        <div className="flex flex-col ml-12 mt-20">
        <h2 className="text-3xl font-semibold text-violet-500 uppercase mb-5">
                Ресурс № 1 для изучения иностранных языков
              </h2>
              <p className="text-gray-600  ">
              Учиться с Polyglot весело и интересно. Зарабатывайте очки за правильные ответы, открывайте 
              <br/>
              новые материалы и развивайте навыки разговорной речи. Наши короткие уроки действительно 
              <br/>
              работают, и мы можем это доказать.
              </p>
        </div>
       
        </div>
      </div>

     
      <div>
        <div className="container mx-auto mt-64">
          <div className="text-center mb-12">
            <h2 className="text-3xl  font-semibold text-violet-500 uppercase">
              Учиться с Polyglot весело и интересно
            </h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-violet-500">
                Почему вам точно понравится Polyglot
              </h3>
              <p className="text-gray-600">
                Высокая эффективность: Наши курсы эффективно развивают навыки
                <br />
                устной и письменной речи. Ознакомьтесь с нашими свежими
                исследованиями!
              </p>
              <p className="text-gray-600">
                Индивидуальное обучение: Наши уроки сочетают лучшие достижения
                искусственного интеллекта и лингвистики. Мы балансируем
                сложность и темп обучения для каждого пользователя
                индивидуально!
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-violet-500">Стимул к учёбе</h3>
              <p className="text-gray-600">
                С нашим игровым подходом ежедневные занятия входят в привычку.
                Вам помогут забавные задания и напоминания от нашего талисмана —
                совёнка Poly.
              </p>
              <p className="text-gray-600">
                Нескучные уроки: Эффективное обучение не должно быть скучным!
                Интересные задания и забавные персонажи дают стимул заниматься
                каждый день.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-violet-500">
                Изучайте иностранный язык в любое время и в любом месте
              </h3>
              <p className="text-gray-600">
                Проводите перерывы или время в пути с пользой с нашими
                приложениями для iPhone и Android. Загрузите их, и вы поймёте,
                почему мы получили от Apple и Google самые лестные отзывы.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-violet-500">
                Polyglot for Schools
              </h3>
              <p className="text-gray-600 mt-10">
                Бесплатный инструмент для преподавателей иностранного.
                Используйте Polyglot для обучения в классе и дома.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
