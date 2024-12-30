import { useEffect, useState } from 'react';
import { apiGetQuizHistory } from '../api/quiz';

interface IHistory {
  category: string;
  date: string;
  score: string;
  difficulty: string;
  result: string;
  time: string;
}

export const QuizHistory = () => {
  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    getQuizHistory();
  }, []);

  const getQuizHistory = async () => {
    const res = await apiGetQuizHistory();
    setHistory(res);
  };
  if (history) {
    return (
      <div className="border border-darkBlue rounded-xl shadow-md mt-4 flex justify-center">
        <table className="text-darkBlue w-full">
          <thead className="border-b border-b-darkBlue">
            <tr>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Date</th>
              <th>Time</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {history.map((h) => (
              <tr
                className={`${
                  h.result === 'Passed' ? 'text-emerald600' : 'text-rose600'
                } text-center`}
                key={h.time + h.score}
              >
                <td>{h.category}</td>
                <td>{h.difficulty}</td>
                <td>{h.date}</td>
                <td>{h.time}</td>
                <td>{h.score}</td>
                <td>{h.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <p>You have no quiz completed yet</p>
      </div>
    );
  }
};
