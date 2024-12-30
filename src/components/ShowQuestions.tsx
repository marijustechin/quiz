import { IQuestion } from "../types/interfaces";
import { SingleQuestion } from "./SingleQuestion";

interface ShowQuestionsProps {
  questions: IQuestion[];
}

export const ShowQuestions = ({ questions }: ShowQuestionsProps) => {
  return (
    <section className="max-w-screen-md mx-auto">
      {questions.map((question) => (
        <div className="border-b border-b-lightViolet py-2" key={question.id}>
          <SingleQuestion q={question} />
        </div>
      ))}
      <button
        onClick={() => {}}
        type="button"
        className="bg-lightBlue text-white text-2xl p-3 rounded-xl my-5 mx-auto"
      >
        Check answers
      </button>
    </section>
  );
};
