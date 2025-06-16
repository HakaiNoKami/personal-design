import { useCallback, useEffect, useState } from "react";
import { Container } from "./style";

const oneSecond = 1000;

export const Time = () => {
  const [time, setTime] = useState<Date>();

  const getCurrentTime = useCallback(() => setTime(new Date()), []);

  useEffect(() => {
    const interval = setInterval(getCurrentTime, oneSecond);
    return () => clearInterval(interval);
  }, [getCurrentTime]);

  return <Container>{time?.toLocaleTimeString() ?? "--:--:--"}</Container>;
};

export default Time;
