import { useEffect, useState } from "react";
import { IHistory } from "../types/interfaces";
import { clearHistory, getHistory } from "../helpers/LocalStorage";

export const QuizHistory = () => {
  const [history, setHistory] = useState<IHistory[]>([]);

  useEffect(() => {
    getQuizHistory();
  }, []);

  const handleClearHistory = () => {
    clearHistory();
    setHistory([]);
  };

  const getQuizHistory = () => {
    const h = getHistory();
    setHistory(
      h.sort((a: IHistory, b: IHistory) => b.date.localeCompare(a.date))
    );
  };

  if (history.length > 0) {
    return (
      <div>
        <button
          className="px-2 py-1 rounded-lg underline underline-offset-8 hover:no-underline hover:bg-lightBlue hover:text-white"
          onClick={handleClearHistory}
        >
          Clear History
        </button>
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
                    h.result === "Passed" ? "text-emerald600" : "text-rose600"
                  } description`}
                  key={h.time + h.score + h.category}
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
      </div>
    );
  } else {
    return (
      <div className="my-10">
        <p className="text-center">You have no quiz completed yet</p>
      </div>
    );
  }
};
