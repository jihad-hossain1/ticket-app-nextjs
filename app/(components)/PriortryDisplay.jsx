import { AiOutlineStar } from "react-icons/ai";

const PriortryDisplay = () => {
  return (
    <div className="flex items-center space-x-2">
      <AiOutlineStar size={22} className="text-yellow-500" />
      <AiOutlineStar size={22} className="text-yellow-500" />
      <AiOutlineStar size={22} className="text-yellow-500" />
      <AiOutlineStar size={22} className="text-yellow-500" />
      <AiOutlineStar size={22} className="text-yellow-500" />
    </div>
  );
};

export default PriortryDisplay;
