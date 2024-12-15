type GridLayoutType = {
  total: number;
  color: string;
};

export default function GridLayout({ total, color }: GridLayoutType) {
  return (
    <div
      className={`flex gap-[1px] p-2 flex-wrap h-fit mx-auto rounded w-fit outline-none select-none`}>
      {Array.from({ length: total }).map((_, index) => {
        return (
          <div key={index} className={`size-2 ${color} rounded-full`}></div>
        );
      })}
    </div>
  );
}
