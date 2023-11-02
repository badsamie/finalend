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
  {
    title: "We ... to work every day.",
    variants: ["gos", "goes", "go", "are going"],
    correct: 2,
  },
  {
    title: "Nick is Russian. He’s ... Russia",
    variants: ["from", "to", "on", "at"],
    correct: 0,
  },
  {
    title: "Moscow is ... than London.",
    variants: ["nosiest", "noisy", "noisier", "most noisy"],
    correct: 2,
  },
  {
    title: "Look at Emma! She ... a blue skirt today!",
    variants: ["wearing", "wear", "is wear", "is wearing"],
    correct: 2,
  },
  {
    title: "She’ll have to wait because the breakfast ... .",
    variants: [
      "is just making",
      "is just being made",
      "is just being making",
      "is just made",
    ],
    correct: 1,
  },
];

function Result({ correct }) {
  const percentageCorrect = (correct / questions.length) * 100;

  let level;
  if (percentageCorrect > 85) {
    level = "Advanced";
  } else if (percentageCorrect > 70) {
    level = "Upper-Intermediate";
  } else if (percentageCorrect > 60) {
    level = "Intermediate";
  } else if (percentageCorrect > 40) {
    level = "Pre-Intermediate";
  } else if (percentageCorrect > 20) {
    level = "Elementary";
  } else {
    level = "Beginner";
  }

  return (
    <div className="result text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        className="w-32 h-32 mx-auto mb-6 "
        alt="Result Icon"
      />
      <h2 className="text-2xl font-bold uppercase mb-6 hover:text-3xl hover:text-violet-500">
        Вы отгадали {correct} ответов из {questions.length}.
      </h2>
      <h3 className="text-xl font-bold uppercase mb-6 hover:text-2xl hover:text-violet-600">
        {" "}
        Ваш уровень: {level}
      </h3>
      <a href="/quiz">
        <button className="bg-violet-500 hover:bg-violet-600 font-light uppercase text-white rounded px-6 py-2 shadow transition-all duration-200">
          Пойти улучшать свой уровень
        </button>
      </a>
    </div>
  );
}

function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-gray-100 rounded-full mb-4 overflow-hidden">
      <div
        style={{ width: `${percentage}%` }}
        className="h-4 bg-violet-400 transition-all duration-500"
      ></div>
    </div>
  );
}

function Game({ step, question, onClickVariant, lives, message }) {
  const increment = 100 / questions.length;
  const percentage = increment * (step + 1);

  return (
    <div className="flex flex-col items-center space-y-4 w-9/12">
      <ProgressBar percentage={percentage} />
      <div className="flex space-x-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 ${
              i < lives ? "bg-violet-400" : "bg-gray-300"
            } rounded-full`}
          ></div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">{question.title}</h1>
      <ul className="w-full space-y-4">
        {question.variants.map((text, index) => (
          <li
            onClick={() => onClickVariant(index)}
            key={text}
            className="cursor-pointer p-4 bg-white w-full text-center rounded-lg shadow hover:bg-gray-100 transition-all duration-200"
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
  const [lives, setLives] = useState(5);
  const [message, setMessage] = useState(null);
  const [isCorrect, setIsCorrect] = useState(true);

  const question = questions[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setIsCorrect(true);
      setMessage("ПРАВИЛЬНО!");
      setCorrect(correct + 1);
    } else {
      setIsCorrect(false);
      setMessage(
        "НЕВЕРНО! ПРАВИЛЬНЫЙ ОТВЕТ: " + question.variants[question.correct]
      );
      setLives(lives - 1);
    }

    setTimeout(() => {
      setMessage(null);
      setStep((prevStep) => prevStep + 1);
    }, 1000);
  };

  const handleNavigation = (action) => {
    switch (action) {
      case "prev":
        if (step > 0) {
          setStep(step - 1);
        }
        break;
      case "next":
        if (step < questions.length - 1) {
          setStep(step + 1);
        }
        break;
      case "skip":
        if (step < questions.length - 1) {
          setStep(step + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="App min-h-screen flex items-center justify-center p-4">
      {lives > 0 && step !== questions.length ? (
        <div className="flex flex-col items-center space-y-4 w-9/12">
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            lives={lives}
            message={message}
          />
          <div className="mt-4">
            <button
              onClick={() => handleNavigation("prev")}
              className="border uppercase w-36 bg-violet-400 rounded text-white h-9"
            >
              Prev
            </button>
            <button
              onClick={() => handleNavigation("skip")}
              className="border uppercase w-36 h-9 bg-violet-400 rounded text-white"
            >
              Skip
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="border uppercase w-36 h-9 bg-violet-400 rounded text-white"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Result correct={correct} />
      )}

      <div
        className={`absolute bottom-4 left-0 right-0 p-4 w-64  text-white text-center transform transition-transform duration-300 ${
          message
            ? isCorrect
              ? "bg-green-300 translate-y-0"
              : "bg-red-300 translate-y-0"
            : "translate-y-full"
        }`}
      >
        {message}
      </div>
    </div>
  );
};
export default Quiz;
