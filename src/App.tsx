import { useState, useEffect } from "react";
import "./App.css";

const HOURS = 12;
const MINUTES = 60;

const GRADE_HOUR = 360 / 12;
const GRADE_MINUTES = 360 / 60;
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours / 12) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const secondDeg = (seconds / 60) * 360;

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#06010c]">
        <div className="w-66 h-66 bg-[#120f17] bg-opacity-30 rounded-full flex justify-center items-center z-30 relative">
          <div className="w-62 h-62 bg-[#06010c] rounded-full relative flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-white absolute z-10"></div>
              <div
                className="w-[4px] h-15 bg-red-400 transform -translate-y-[50%] absolute origin-bottom rounded-[10px]"
                style={{ transform: `rotate(${hourDeg}deg)` }}
              ></div>
              <div
                className="w-[2px] h-23 bg-white transform -translate-y-[50%] absolute transform origin-bottom rotate-[120deg] rounded-[10px]"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              ></div>
              <div
                className="w-[1px] h-23 bg-white transform -translate-y-[50%] absolute transform origin-bottom rotate-[300deg] rounded-[10px]"
                style={{ transform: `rotate(${secondDeg}deg)` }}
              ></div>
              {Array.from({ length: HOURS }, (_, i) => (
                <div
                  key={i}
                  className="absolute "
                  style={{
                    transform: `rotate(${
                      i * GRADE_HOUR
                    }deg) translate(-50%, -50%)`,
                  }}
                >
                  <div className="w-1 h-29 transform translate-x-[50%]">
                    <div className="w-1.5 h-4 bg-[#120f17] rounded-[5px] z-20"></div>
                  </div>
                </div>
              ))}
              {Array.from({ length: MINUTES }, (_, i) => (
                <div
                  key={i}
                  className="absolute "
                  style={{
                    transform: `rotate(${
                      i * GRADE_MINUTES
                    }deg) translate(-50%, -50%)`,
                  }}
                >
                  <div className="w-1 h-29 translate-x-[50%]">
                    <div className="w-0.5 h-3 bg-[#120f17] rounded-[5px] z-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
