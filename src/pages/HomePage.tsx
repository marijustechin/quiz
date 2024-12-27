import { useState } from "react";
import { IQuestion } from "../types/interfaces";
import { StartForm } from "../components/StartForm";
import { ShowQuestions } from "../components/ShowQuestions";

export const HomePage = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  return (
    <main className="max-w-screen-xl mx-auto">
      {questions.length === 0 ? (
        <StartForm onStart={(data: IQuestion[]) => setQuestions(data)} />
      ) : (
        <ShowQuestions questions={questions} />
      )}
    </main>
  );
};
