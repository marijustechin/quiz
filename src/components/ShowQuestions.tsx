import { useEffect, useState } from "react";
import { IQuestion } from "../types/interfaces";

interface ShowQuestionsProps {
  questions: IQuestion[];
}

interface IUserAnswer {
  answer_a: boolean;
  answer_b: boolean;
  answer_c: boolean;
  answer_d: boolean;
  answer_e: boolean;
  answer_f: boolean;
}

interface IAnswer {
  question: number;
  answer: number;
}

export const ShowQuestions = ({ questions }: ShowQuestionsProps) => {
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    initialUserAnswers();
  }, []);

  const initialUserAnswers = () => {
    let tempArray: IUserAnswer[] = [];
    questions.forEach((question, idx) => {
      tempArray[idx] = {
        answer_a: false,
        answer_b: false,
        answer_c: false,
        answer_d: false,
        answer_e: false,
        answer_f: false,
      };
    });
    setUserAnswers(tempArray);
  };

  const handleSelect = (qIdx: number, aIdx: number) => {
    const tempArray = [...userAnswers];
    tempArray[qIdx] = { ...tempArray[qIdx], answer_a: true };
    setUserAnswers(tempArray);
    // setAnswers([...answers, { question: qIdx, answer: aIdx }]);
    console.log("question: ", qIdx, "answer: ", aIdx);
  };

  const handleCheck = () => {
    setShowExplanation(true);
  };

  console.log(userAnswers);

  return (
    <section className="max-w-screen-md mx-auto">
      {questions.map((question, qIdx) => (
        <div className="border-b border-b-lightViolet py-2" key={question.id}>
          <p className="text-center text-darkBlue text-2xl p-5">
            {question.question}
          </p>
          <div className="flex gap-2">
            {Object.keys(question.answers).map((key, aIdx) => {
              if (question.answers[key])
                return (
                  <div
                    onClick={() => handleSelect(qIdx, aIdx)}
                    className={`${Object.keys(
                      userAnswers[qIdx]
                    )} py-1 px-2 rounded-xl border cursor-pointer border-lightBlue hover:bg-lightViolet hover:border-lightViolet`}
                    key={key}
                  >
                    {question.answers[key]}
                  </div>
                );
            })}
            {showExplanation && <p>{question.explanation}</p>}
          </div>
        </div>
      ))}
      <button
        onClick={handleCheck}
        type="button"
        className="bg-lightBlue text-white text-2xl p-3 rounded-xl my-5 mx-auto"
      >
        Check answers
      </button>
    </section>
  );
};
