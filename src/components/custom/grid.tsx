import GridLayout from "./grid-layout";
import {
  ageAtom,
  animalsList,
  tabsAtom,
  averageAges,
  currentAnimalAvgAge,
} from "../../atoms";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

export default function Grid() {
  const tabID = useAtomValue(tabsAtom);
  const age = useAtomValue(ageAtom);

  const [currentAnimalAverageAge, setCurrentAnimalAvgAge] =
    useAtom(currentAnimalAvgAge);

  useEffect(() => {
    setCurrentAnimalAvgAge(averageAges[animalsList[tabID]]);
  }, [tabID]);

  const customInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentAnimalAvgAge(e.target.value as unknown as number);
  };
  const totalWeeks = (): number => {
    return convertToWeeks(currentAnimalAverageAge);
  };

  const pastWeeks = (): number => {
    return convertToWeeks(age);
  };

  const futureWeeks = () => {
    return age ? totalWeeks() - pastWeeks() : 0;
  };

  const convertToWeeks = (age: number): number => {
    return age * 52.14;
  };

  return (
    <div className="block w-full py-3 md:w-[80%] lg:w-[60%] md:mx-auto h-fit ">
      <div className="text-sm text-center text-gray-400">
        According to the average lifespan of {animalsList[tabID]}:{" "}
        <input
          className="px-2 py-1 font-bold bg-transparent border rounded outline-none w-fit no-spinner"
          type="number"
          min={1}
          max={999}
          onChange={customInput}
          value={currentAnimalAverageAge}
        />
      </div>
      <div className="my-3 text-center text-emerald-500">
        You have spend more than {(pastWeeks() * 7).toFixed(2)} days or{" "}
        {(pastWeeks() / totalWeeks()) * 100}% of your life.
        <br />
        {futureWeeks() > 0 ? (
          <span className="inline-block p-4 text-orange-400">
            {`There are ${Math.round(futureWeeks() * 7)} days or ${Math.round(
              (futureWeeks() / totalWeeks()) * 100
            )}% left for you to
            cherish. Make it worthwhile.`}
          </span>
        ) : (
          <span className="inline-block p-4 text-red-400 whitespace-normal ">
            {`Kindly update the average lifespan of ${animalsList[tabID]} if you believe it’s wrong to get more precise results. OR make sure age is less than lifespan of ${animalsList[tabID]}.`}
          </span>
        )}
      </div>
      {age < currentAnimalAverageAge ? (
        <>
          <div className="text-base font-bold text-center text-slate-400">
            <span>Past Weeks</span>
            <br />
            <span className="text-xs">
              This shows the number of weeks you’ve already spent.
            </span>
            <GridLayout total={pastWeeks()} color="bg-gray-500" />
          </div>
          <div className="text-base font-bold text-center text-slate-300">
            <span>Future Weeks</span>
            <br />
            <span className="text-xs">
              These are the weeks you still have to enjoy.
            </span>
            <GridLayout total={futureWeeks()} color="bg-green-500" />
          </div>
        </>
      ) : (
        <span></span>
      )}
    </div>
  );
}
