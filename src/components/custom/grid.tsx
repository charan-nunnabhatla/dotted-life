import GridLayout from "./grid-layout";
import { ageAtom } from "../../atoms";
import { useAtomValue } from "jotai";

const averageAges = {
  human: 80,
  dog: 11.5,
  cat: 17.5,
  bird: 48,
};

function calculateRemainingAge(
  age: number,
  animal: keyof typeof averageAges
): number {
  return averageAges[animal] - age;
}

function calculatePastWeeks(age: number, remainingAge: number): number {
  return calculateWeeksOfAge(age) - calculateWeeksOfAge(remainingAge);
}

function calculateWeeksOfAge(age: number): number {
  return age * 52;
}

export default function Grid() {
  const age = useAtomValue(ageAtom);
  console.log(calculateRemainingAge(age, "dog"));
  return (
    <div className="">
      <div className="">
        <span>Past Weeks</span>
        <GridLayout total={200} color="bg-[rgb(45,34,76)]" />
      </div>
      <div className="">
        <span>Future Weeks</span>
        <GridLayout total={200} color="bg-[rgb(35,94,76)]" />
      </div>
    </div>
  );
}
