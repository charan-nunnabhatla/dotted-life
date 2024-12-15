import { tabsAtom, ageAtom } from "../../atoms";
import { useAtom, useAtomValue } from "jotai";

export default function Inputs() {
  const [age, setAge] = useAtom(ageAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value as unknown as number);
  };

  return (
    <div className="flex p-2 h-fit max-w-[80%] mx-auto my-3">
      <div className="mx-auto ">
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          className="px-2 font-bold py-1 w-fit rounded bg-[rgba(255,255,255,0.23)] "
          type="number"
          value={age}
          min={1}
          max={999}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
