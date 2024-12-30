import { Dispatch, SetStateAction, useEffect } from "react";
import { formatSeconds } from "../helpers/FormatSeconds";

interface ITimerProps {
  isActive: boolean;
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
}

export const Timer = ({ isActive, seconds, setSeconds }: ITimerProps) => {
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive, setSeconds]);

  return (
    <p
      className={`${
        isActive ? "text-lightBlue" : "text-rose600"
      } text-center my-3 text-2xl font-semibold`}
    >
      Time elapsed: {formatSeconds(seconds)}
    </p>
  );
};
