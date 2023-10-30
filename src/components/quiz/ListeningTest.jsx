import React, { useState } from "react";
import audio1 from "./audio/beginner_elementary.mp3"
import audio2 from "./audio/pre_intermediate_intermediate.mp3"

const listeningQuestions = [
  {
    audioUrl: {audio1},
    question: "What was the main topic of the audio?",
    variants: ["Holidays", "Technology", "Food"],
    correct: 0,
  },
  {
    audioUrl: {audio2},
    question: "Who was the main character in the story?",
    variants: ["John", "Sara", "Michael"],
    correct: 1,
  },
];

function ListeningTest() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);

  const question = listeningQuestions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    setIsAudioPlayed(false);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="listening-test">
      {step !== listeningQuestions.length ? (
        <>
          <audio
            controls
            onEnded={() => setIsAudioPlayed(true)}
            src={question.audioUrl}
          >
            Your browser does not support the audio element.
          </audio>

          {isAudioPlayed && (
            <div>
              <p>{question.question}</p>
              {question.variants.map((option, index) => (
                <button key={index} onClick={() => onClickVariant(index)}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="result">
          Вы правильно ответили на {correct} из {listeningQuestions.length} вопросов!
        </div>
      )}
    </div>
  );
}

export default ListeningTest;
