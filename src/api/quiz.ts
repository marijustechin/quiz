import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = "https://quizapi.io/api/v1";
const API_KEY = process.env.API_KEY;

const config: AxiosRequestConfig = {
  headers: {
    "X-Api-Key": API_KEY,
  },
  data: {
    category: "",
    difficulty: "",
  },
};

export const apiGetQuestions = async (category: string, difficulty: string) => {
  config.data = { ...config.data, category: category, difficulty: difficulty };

  try {
    const res: AxiosResponse = await axios.get(
      `${API_BASE_URL}/questions`,
      config
    );

    console.log(res.data);

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
    const res: AxiosResponse = await axios.get(
      `${API_BASE_URL}/categories`,
      config
    );
    return res.data;
  } catch (e) {
    return { error: e };
  }
};
