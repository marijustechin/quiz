import { useState } from "react";
import { IQuestion } from "../types/interfaces";

interface IAnswer {
  id: number;
  correct: boolean;
}

interface ISingleQuestionProps {
  q: IQuestion;
  reveal: boolean;
  onSelect: (a: IAnswer) => void;
}

export const SingleQuestion = ({
  q,
  reveal,
  onSelect,
}: ISingleQuestionProps) => {
  const [selected, setSelected] = useState("");
  const aKeys = Object.keys(q.answers) as Array<keyof typeof q.answers>;

  const saveAnswer = (e: React.ChangeEvent, k: string) => {
    const aKeyName = k + "_correct";
    let correct = false;

    // patikriname, ar atsakymas teisingas
    if (q.correct_answers[aKeyName] === "true") correct = true;
    setSelected(k);

    onSelect({ id: q.id, correct: correct });
  };

  const isCorrect = (key: string) => {
    const keyName = key + "_correct";
    if (q.correct_answers[keyName] === "true") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <p className="text-darkBlue text-center text-2xl p-5">{q.question}</p>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        {aKeys.map((key) => {
          if (q.answers[key])
            return (
              <label key={q.answers[key]}>
                <input
                  disabled={reveal}
                  className="sr-only peer"
                  type={
                    q.multiple_correct_answers === "false"
                      ? "radio"
                      : "checkbox"
                  }
                  name={q.question}
                  autoComplete="off"
                  onChange={(e) => saveAnswer(e, key)}
                />
                <div
                  className={`${
                    reveal
                      ? isCorrect(key)
                        ? "bg-ligthGreen border-ligthGreen"
                        : selected === key && "bg-lightPink border-lightPink"
                      : "peer-checked:bg-lightViolet peer-checked:border-lightViolet cursor-pointer"
                  } py-1 px-3 border border-lightBlue rounded-lg`}
                >
                  {q.answers[key]}
                </div>
              </label>
            );
        })}
      </div>
      {reveal && q.explanation && (
        <div className="flex gap-2 p-3 border border-lightBlue rounded-xl mt-2 bg-lightBlue/20">
          <div className="font-semibold">Explanation:</div>
          <div>{q.explanation}</div>
        </div>
      )}
    </div>
  );
};
