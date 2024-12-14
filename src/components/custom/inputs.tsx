import { tabsAtom, ageAtom } from "../../atoms";
import { useAtom, useAtomValue } from "jotai";

export default function Inputs() {
  const tabId = useAtomValue(tabsAtom);
  const [age, setAge] = useAtom(ageAtom);

  const handleClick = () => {
    
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value as unknown as number);
  };

  return (
    <div className="flex p-2 border h-fit max-w-[80%] mx-auto my-3">
      {tabId + 1}
      {age}
      <div className="mx-auto ">
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          className="px-2 font-bold py-1 w-fit rounded bg-[rgba(255,255,255,0.23)] "
          type="number"
          value={age}
          min={1}
          onChange={handleChange}
        />
        <button
          onClick={() => handleClick}
          className="px-3 py-1 mx-4 border rounded">
          Next
        </button>
      </div>
    </div>
  );
}
