import { ageAtom } from "../../atoms";
import { useAtom } from "jotai";

export default function Inputs() {
  const [age, setAge] = useAtom(ageAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value as unknown as null);
  };

  return (
    <div className="flex p-2 h-fit max-w-[80%] mx-auto my-3">
      <div className="mx-auto ">
        <input
          id="age"
          className="px-2 font-bold py-1 w-fit rounded bg-[rgba(255,255,255,0.23)] "
          type="number"
          title="Enter your age"
          placeholder="Age"
          value={age as unknown as number}
          min={1}
          max={999}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
