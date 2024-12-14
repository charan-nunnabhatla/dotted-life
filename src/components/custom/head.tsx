export default function Head() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-3 h-fit">
      <h1 className="text-3xl font-black text-center text-transparent text-black bg-clip-text bg-gradient-to-tr from-emerald-400 to-blue-600 md:text-4xl lg:text-5xl">
        Dotted Life
      </h1>
      <div className="capitalize text-center font-bold text-xs md:text-sm text-[rgb(238,145,69)]">
        "Know your life in dots, each dot is a week"
      </div>
      <div className="w-[80%] border border-gray-400 m-3 "></div>
    </div>
  );
}

//TODO: add dotted background;
//TODO: age calculation for various animals in slider under the header;
//TODO: past dot: 'week of the past', future dot: 'week of the future';
