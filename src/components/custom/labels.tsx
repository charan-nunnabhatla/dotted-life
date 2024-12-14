export default function Labels() {
  return (
    <div className="flex items-center justify-center gap-5 pt-2 pb-3 text-xs">
      <div className="flex items-center gap-3">
        <div className= "bg-green-500 rounded-full size-3"></div>
        <span className="capitalize ">Week of the future</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-gray-500 rounded-full size-3"></div>
        <span className="capitalize ">Week of the past</span>
      </div>
    </div>
  );
}
