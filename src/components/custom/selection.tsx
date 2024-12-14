import MiniTile from "./mini-tile";

export default function Selection() {
  const animals: Array<[string, string]> = [
    ["Human", "rgb(143,191,160)"],
    ["Dog", "rgb(194,183,155)"],
    ["Cat", "rgb(161,181,201)"],
    ["Bird", "rgb(183,159,209)"],
  ];

  return (
    <div className="flex p-2 mx-auto overflow-x-auto rounded md:justify-center scroll-bar">
      <div className="flex flex-row items-center px-2 py-1 mx-auto rounded w-fit ">
        {animals.map(([val, col], index) => {
          return <MiniTile key={index} title={val} color={col} index={index} />;
        })}
      </div>
    </div>
  );
}
