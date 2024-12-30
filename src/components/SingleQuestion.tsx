import { IQuestion } from "../types/interfaces";

export const SingleQuestion = ({ q }: { q: IQuestion }) => {
  const aKeys = Object.keys(q.answers) as Array<keyof typeof q.answers>;

  return (
    <div>
      <p className="text-center text-darkBlue text-2xl p-5">{q.question}</p>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        {aKeys.map((key) => {
          if (q.multiple_correct_answers === "false") {
            if (q.answers[key])
              return (
                <label key={q.answers[key]}>
                  <input
                    className="sr-only peer"
                    type="radio"
                    name={q.question}
                    autoComplete="off"
                  />
                  <span className="peer-checked:bg-lightViolet peer-checked:border-lightViolet cursor-pointer py-1 px-3 border border-lightBlue rounded-lg">
                    {q.answers[key]}
                  </span>
                </label>
              );
          } else {
            if (q.answers[key])
              return (
                <label key={q.answers[key]}>
                  <input
                    className="sr-only peer"
                    type="checkbox"
                    name={q.question}
                    autoComplete="off"
                  />
                  <span className="peer-checked:bg-lightViolet peer-checked:border-lightViolet cursor-pointer py-1 px-3 border border-lightBlue rounded-lg text-center">
                    {q.answers[key]}
                  </span>
                </label>
              );
          }
        })}
      </div>
    </div>
  );
};

{
  /* <div className="flex gap-2">
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
          </div> */
}
