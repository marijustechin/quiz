import { useEffect, useState } from "react";
import { apiGetCategories, apiGetQuestions } from "../api/quiz";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICategory, IFormInputs, IQuestion } from "../types/interfaces";

export const HomePage = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  useEffect(() => {
    getCategories();
  }, []);

  const getQuestions = async (cat: string, diff: string) => {
    const res = await apiGetQuestions(cat, diff);
    setQuestions(res);
  };

  const getCategories = async () => {
    const res = await apiGetCategories();
    setCategories(res);
  };

  const onSubmit: SubmitHandler<IFormInputs> = async (formData) => {
    const res = await getQuestions(formData.category, formData.difficulty);
    setQuestions(res);
    console.log(questions);
  };

  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl text-darkBlue font-bold my-8">
        My very own Quiz App!
      </h1>
      <p className="text-center text-darkBlue text-2xl p-5">
        Here comes the result of my attempt to write write a fully functioning
        quiz app
      </p>
      <section className="max-w-screen-md mx-auto">
        <form
          className="flex flex-col gap-3 max-w-sm mx-auto items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <select
            id="difficulty"
            className="w-[40%] border border-lightBlue rounded-xl p-2"
            {...register("difficulty", {
              required: "Please select difficulty level",
            })}
          >
            <option value={""}>Difficulty</option>
            <option value={"Easy"}>Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"}>Hard</option>
          </select>
          {errors.difficulty && (
            <span className="text-center text-sm font-semibold text-lightPink">
              {errors.difficulty.message}
            </span>
          )}
          <select
            className="w-[40%] border border-lightBlue rounded-xl p-2"
            id="category"
            {...register("category", { required: "Please select category" })}
          >
            <option value={""}>Category</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-center text-sm font-semibold text-lightPink">
              {errors.category.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-lightBlue text-white text-2xl w-[70%] p-3 rounded-xl"
          >
            Start quiz
          </button>
        </form>
      </section>
    </main>
  );
};
