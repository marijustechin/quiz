import { useState } from 'react';
import { IQuestion } from '../types/interfaces';
import { SingleQuestion } from './SingleQuestion';
import { Timer } from './Timer';
import { formatDate } from '../helpers/FormatDate';
import { formatSeconds } from '../helpers/FormatSeconds';

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
  const [showUnanswered, setShowUnanswered] = useState(false);
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
        ? 'Passed'
        : 'Failed';
    const history = {
      category: category,
      date: date,
      score: score,
      difficulty: difficulty,
      result: result,
      time: formatSeconds(seconds),
    };
    console.log('result: ', history);
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
    } else {
      // jei ne, rodome raudona pranesima
      setShowUnanswered(true);
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
    console.log('answer: ', a);
  };

  return (
    <section className="max-w-screen-md mx-auto flex flex-col justify-center">
      <div>
        <Timer seconds={seconds} isActive={isActive} setSeconds={setSeconds} />
      </div>
      {showUnanswered && questions.length !== answers.length && (
        <p>Please answer ALL questions</p>
      )}
      {questions.map((question) => (
        <div className="border-b border-b-lightViolet py-2" key={question.id}>
          <SingleQuestion
            q={question}
            reveal={reveal}
            showUnanswered={showUnanswered}
            onSelect={(a) => onSelect(a)}
          />
        </div>
      ))}
      {showResult ? (
        <div>
          <p>
            Result:{' '}
            {`${answers.filter((a) => a.correct).length}/${questions.length}`}
          </p>
        </div>
      ) : (
        <button
          onClick={handleCheckAnswers}
          type="button"
          className="bg-lightBlue text-white text-2xl p-3 rounded-xl my-5 mx-auto hover:bg-darkBlue"
        >
          Check answers
        </button>
      )}
    </section>
  );
};
