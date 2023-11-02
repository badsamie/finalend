import React, { useEffect, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ContentCopyIcon from "@mui/icons-material/FileCopy";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import countries from "./data";
import "./Translate.css";
const Translate = () => {
  // Состояния для хранения текста, языков и переведенного текста
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [selectedFromLanguage, setSelectedFromLanguage] = useState("en-GB");
  const [selectedToLanguage, setSelectedToLanguage] = useState("ky-KG");

  // Эффект для заполнения опций в select тегах
  useEffect(() => {
    // Функция для заполнения опций
    const populateSelectOptions = (tag, selectedLang) => {
      for (let country_code in countries) {
        let selected = country_code === selectedLang ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    };

    // Получаем все select теги
    const selectTags = document.querySelectorAll("select");

    // Для каждого select тега заполняем опции
    selectTags.forEach((tag, id) => {
      const selectedLang = id === 0 ? "en-GB" : "ky-KG";
      populateSelectOptions(tag, selectedLang);
    });
  }, []);

  // Обработчик для обмена текстами и языками
  const handleExchange = () => {
    setFromText(toText);
    setToText(fromText);
    setSelectedFromLanguage(selectedToLanguage);
    setSelectedToLanguage(selectedFromLanguage);
  };

  // Обработчик для выполнения перевода
  const handleTranslate = async () => {
    if (!fromText) return;

    setToText("Translating...");

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${selectedFromLanguage}|${selectedToLanguage}`
      );
      const data = await response.json();

      if (data.responseData) {
        setToText(data.responseData.translatedText);
      } else {
        setToText("Translation error");
      }
    } catch (error) {
      console.error("Translation error:", error);
      setToText("Translation error");
    }
  };

  // Обработчик для копирования текста в буфер обмена
  const handleCopyText = (id) => {
    const textToCopy = id === "from" ? fromText : toText;
    navigator.clipboard.writeText(textToCopy);
  };

  // Обработчик для озвучивания текста
  const handleTextSpeech = (id) => {
    const textToSpeak = id === "from" ? fromText : toText;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = id === "from" ? selectedFromLanguage : selectedToLanguage;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-input">
          {/* Ввод текста */}
          <textarea
            spellCheck="false"
            className="from-text"
            placeholder="Введите текст"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
          ></textarea>
          {/* Вывод перевода */}
          <textarea
            spellCheck="false"
            readOnly
            disabled
            className="to-text"
            placeholder="Перевод"
            value={toText}
          ></textarea>
        </div>
        {/* Контролы для выбора языка и действий */}
        <ul className="controls">
          {/* Секция "from" */}
          <li className="row from">
            <div className="icons">
              {/* Иконка для озвучивания текста */}
              <VolumeUpIcon
                id="from-volume"
                onClick={() => handleTextSpeech("from")}
              />
              {/* Иконка для копирования текста */}
              <ContentCopyIcon
                id="from-copy"
                onClick={() => handleCopyText("from")}
              />
            </div>
            {/* Выбор языка "from" */}
            <select
              value={selectedFromLanguage}
              onChange={(e) => setSelectedFromLanguage(e.target.value)}
            >
              {/* Опции для "from" языка */}
            </select>
          </li>
          {/* Иконка для обмена текстами и языками */}
          <li className="exchange" onClick={handleExchange}>
            <SwapHorizIcon />
          </li>
          {/* Секция "to" */}
          <li className="row to">
            {/* Выбор языка "to" */}
            <select
              value={selectedToLanguage}
              onChange={(e) => setSelectedToLanguage(e.target.value)}
            >
              {/* Опции для "to" языка */}
            </select>
            <div className="icons">
              {/* Иконка для озвучивания текста */}
              <VolumeUpIcon
                id="to-volume"
                onClick={() => handleTextSpeech("to")}
              />
              {/* Иконка для копирования текста */}
              <ContentCopyIcon
                id="to-copy"
                onClick={() => handleCopyText("to")}
              />
            </div>
          </li>
        </ul>
      </div>
      {/* Кнопка для выполнения перевода */}
      <button onClick={handleTranslate}>Перевести текст</button>
    </div>
  );
};

export default Translate;
