import { useAtom } from "jotai";
import { tabsAtom } from "../../atoms";

type MiniTileType = {
  title: string;
  color: string;
  index: number;
};

export default function MiniTile({ title, color, index }: MiniTileType) {
  const [activeTab, setActiveTab] = useAtom(tabsAtom);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleClick(index)}
        className="px-5 mx-2 font-bold text-center text-white capitalize rounded text-md"
        style={{
          // color: activeTab !== index ? col : "white",
          backgroundColor:
            activeTab === index ? color : "rgba(148,148,150,0.53)",
        }}>
        {title}
      </button>
    </div>
  );
}
