import { useState } from 'react';
import { IQuestion } from '../types/interfaces';

interface IAnswer {
  id: number;
  correct: boolean;
}

interface ISingleQuestionProps {
  q: IQuestion;
  reveal: boolean;
  showUnanswered: boolean;
  onSelect: (a: IAnswer) => void;
}

export const SingleQuestion = ({
  q,
  reveal,
  showUnanswered,
  onSelect,
}: ISingleQuestionProps) => {
  const [answered, setAnswered] = useState(false);
  const aKeys = Object.keys(q.answers) as Array<keyof typeof q.answers>;

  const saveAnswer = (e: React.ChangeEvent, k: string) => {
    const aKeyName = k + '_correct';
    let correct = false;

    // patikriname, ar atsakymas teisingas
    if (q.correct_answers[aKeyName] === 'true') correct = true;
    setAnswered(true);
    onSelect({ id: q.id, correct: correct });
  };

  return (
    <div>
      <p
        className={`${
          showUnanswered && !answered ? 'text-darkBlue' : 'text-rose600'
        } text-center text-2xl p-5`}
      >
        {q.question}
      </p>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        {aKeys.map((key) => {
          if (q.answers[key])
            return (
              <label key={q.answers[key]}>
                <input
                  className="sr-only peer"
                  type={
                    q.multiple_correct_answers === 'false'
                      ? 'radio'
                      : 'checkbox'
                  }
                  name={q.question}
                  autoComplete="off"
                  onChange={(e) => saveAnswer(e, key)}
                />
                <span className="peer-checked:bg-lightViolet peer-checked:border-lightViolet cursor-pointer py-1 px-3 border border-lightBlue rounded-lg">
                  {q.answers[key]}
                </span>
              </label>
            );
        })}
      </div>
    </div>
  );
};
