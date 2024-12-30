import { useState } from "react";
import { IQuestion } from "../types/interfaces";
import { SingleQuestion } from "./SingleQuestion";
import { Timer } from "./Timer";

interface ShowQuestionsProps {
  questions: IQuestion[];
}

export const ShowQuestions = ({ questions }: ShowQuestionsProps) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handleCheckAnswers = () => {
    // 1. Ar visi klausimai atsakyti?
    // 2. Stop laikas
    setIsActive(false);
    // 3. Parodyti teisingus ir neteisingus atsakymus
  };

  return (
    <section className="max-w-screen-md mx-auto flex flex-col justify-center">
      <div>
        <Timer seconds={seconds} isActive={isActive} setSeconds={setSeconds} />
      </div>
      {allAnswers && <p>Please answer ALL questions</p>}
      {questions.map((question) => (
        <div className="border-b border-b-lightViolet py-2" key={question.id}>
          <SingleQuestion q={question} />
        </div>
      ))}
      <button
        onClick={handleCheckAnswers}
        type="button"
        className="bg-lightBlue text-white text-2xl p-3 rounded-xl my-5 mx-auto hover:bg-darkBlue"
      >
        Check answers
      </button>
    </section>
  );
};
