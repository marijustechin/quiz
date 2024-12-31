import axios, { AxiosResponse } from "axios";
import { IQuestion } from "../types/interfaces";

const API_BASE_URL = "https://quizapi.io/api/v1";
const API_KEY = process.env.API_KEY;

/**
 *
 * @param category stringas
 * @param difficulty stringas
 * @returns objektu masyvas
 */
export const apiGetQuestions = async (category: string, difficulty: string) => {
  try {
    const res: AxiosResponse = await axios.get<IQuestion[]>(
      `${API_BASE_URL}/questions`,
      {
        params: {
          apiKey: API_KEY,
          category: category,
          difficulty: difficulty,
          limit: 5,
        },
      }
    );
    return res.data;
  } catch (e) {
    return { error: e };
  }
};

/**
 *
 * @returns objektų masyvas {id:number, name: string}
 */
export const apiGetCategories = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${API_BASE_URL}/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return res.data;
  } catch (e) {
    return { error: e };
  }
};
