import React, { useState } from "react";

const questions = [
  {
    title: "I ______ bus on Mondays.",
    variants: [
      "'m going to work with",
      "'m going to work by",
      "go to work with",
      "go to work by",
    ],
    correct: 3,
  },
  {
    title: "Sorry, but this chair is ______. ",
    variants: ["me", "mine", "my", "our"],
    correct: 1,
  },
  {
    title: "How old ______?'   B: 'I ______ ?",
    variants: [
      "are you / am 20 years old.",
      "have you / have 20 years old",
      "are you / am 20 years.",
      "do you have / have 20 years.",
    ],
    correct: 0,
  },
  {
    title: "I ______ to the cinema.",
    variants: [
      "not usually go",
      "don't usually go",
      "don't go usually",
      "do not go usually",
    ],
    correct: 1,
  },
  {
    title: "Where ______ ?",
    variants: [
      "your sister works",
      "your sister work",
      "does your sister work",
      "do your sister work",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        className="w-32 h-32 mx-auto mb-6 "
        alt="Result Icon"
      />
      <h2 className="text-2xl font-bold mb-6">
        Вы отгадали {correct} ответов из {questions.length}
      </h2>
      <a href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-6 py-2 shadow transition-all duration-200">
          Попробовать снова
        </button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className="flex flex-col">
      <div className=" progress w-full bg-gray-300 rounded-full h-4 mb-6">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner bg-blue-400 transition-all duration-300 rounded-full"
        ></div>
      </div>
      <h1 className="text-2xl font-bold mb-6">{question.title}</h1>
      <ul className="space-y-4">
        {question.variants.map((text, index) => (
          <li
            onClick={() => onClickVariant(index)}
            key={text}
            className="cursor-pointer p-4 bg-white rounded shadow hover:bg-gray-100 transition-all duration-200"
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App min-h-screen bg-blue-50 flex items-center justify-center p-4">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
};

export default Quiz;
