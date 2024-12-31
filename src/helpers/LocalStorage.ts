import { IHistory } from "../types/interfaces";

export const saveResult = (result: IHistory) => {
  // ar yra local storage istorija
  if (localStorage.getItem("quizHistory") === null) {
    // sukuriam
    const history = [];
    history.push(result);
    localStorage.setItem("quizHistory", JSON.stringify(history));
  } else {
    let oldHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    oldHistory = [...oldHistory, result];
    localStorage.setItem("quizHistory", JSON.stringify(oldHistory));
  }
};

export const getHistory = () => {
  return JSON.parse(localStorage.getItem("quizHistory") || "[]");
};

export const clearHistory = () => {
  localStorage.removeItem("quizHistory");
};
