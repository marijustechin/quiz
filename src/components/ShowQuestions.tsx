import { useState } from "react";
import { IQuestion } from "../types/interfaces";
import { SingleQuestion } from "./SingleQuestion";
import { Timer } from "./Timer";
import { formatDate } from "../helpers/FormatDate";
import { formatSeconds } from "../helpers/FormatSeconds";
import { saveResult } from "../helpers/LocalStorage";

interface ShowQuestionsProps {
  questions: IQuestion[];
}

interface IAnswer {
  id: number;
  correct: boolean;
}

export const ShowQuestions = ({ questions }: ShowQuestionsProps) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handleSaveResult = () => {
    const category = questions[0].category;
    const date = formatDate();
    const score = `${answers.filter((a) => a.correct).length}/${
      questions.length
    }`;
    const difficulty = questions[0].difficulty;
    const result =
      answers.filter((a) => a.correct).length > questions.length / 2
        ? "Passed"
        : "Failed";
    const history = {
      category: category,
      date: date,
      score: score,
      difficulty: difficulty,
      result: result,
      time: formatSeconds(seconds),
    };
    saveResult(history);
  };

  const handleCheckAnswers = () => {
    // 1. Ar visi klausimai atsakyti?
    if (questions.length === answers.length) {
      // 2. Stop laikas
      setIsActive(false);
      // 3. Parodome teisingus ir neteisingus atsakymus
      setReveal(true);
      setShowResult(true);
      handleSaveResult();
    }
  };

  const onSelect = (a: IAnswer) => {
    // ar yra klausimo id atsakymu masyve?
    if (answers.find((answer) => answer.id === a.id)) {
      // jei yra, atnaujinam esama
    } else {
      // jei ne, irasom nauja
      setAnswers([...answers, a]);
    }
  };

  return (
    <section className="max-w-screen-md mx-auto flex flex-col justify-center">
      <div>
        <Timer seconds={seconds} isActive={isActive} setSeconds={setSeconds} />
      </div>

      {questions.map((question) => (
        <div className="border-b border-b-lightViolet py-2" key={question.id}>
          <SingleQuestion
            q={question}
            reveal={reveal}
            onSelect={(a) => onSelect(a)}
          />
        </div>
      ))}
      {showResult ? (
        <div className="flex gap-3 items-center justify-center">
          <p className="font-semibold text-2xl">
            You scored{" "}
            {`${answers.filter((a) => a.correct).length}/${questions.length}`}{" "}
            correct answers
          </p>
          <button
            onClick={() => window.location.reload()}
            type="button"
            className="bg-lightBlue text-white text-2xl p-3 rounded-xl my-5 mx-auto hover:bg-darkBlue"
          >
            Play again
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-3">
          {questions.length !== answers.length && (
            <p className="py-1 px-2 bg-ligthGreen font-semibold rounded-lg">
              To check the answers you need to answer ALL questions
            </p>
          )}

          <button
            disabled={questions.length !== answers.length}
            onClick={handleCheckAnswers}
            type="button"
            className={`${
              questions.length !== answers.length
                ? "bg-lightBlue/50"
                : "hover:bg-darkBlue bg-lightBlue"
            }  btn-generic`}
          >
            Check answers
          </button>
        </div>
      )}
    </section>
  );
};
