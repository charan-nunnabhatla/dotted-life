type GridLayoutType = {
  total: number;
  color: string;
};

export default function GridLayout({ total, color }: GridLayoutType) {
  return (
    <div
      className={`flex gap-2 p-2 m-3 justify-center items-center flex-wrap h-fit  w-[90%] mx-auto rounded outline-none `}>
      {Array.from({ length: total }).map((_, index) => {
        return (
          <div key={index} className={`size-2 ${color} rounded-full`}></div>
        );
      })}
    </div>
  );
}
