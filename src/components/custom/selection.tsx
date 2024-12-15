import MiniTile from "./mini-tile";
import { animalsList, colors } from "../../atoms";

export default function Selection() {
  return (
    <div className="flex p-2 mx-auto overflow-x-auto rounded md:justify-center scroll-bar">
      <div className="flex flex-row items-center px-2 py-1 mx-auto rounded w-fit ">
        {Array.from({ length: animalsList.length }).map((_, index) => {
          return (
            <MiniTile
              key={index}
              title={animalsList[index]}
              color={colors[index]}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
