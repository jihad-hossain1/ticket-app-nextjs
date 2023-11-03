import { AiOutlineStar } from "react-icons/ai";

const PriortryDisplay = ({ priority }) => {
  return (
    <div className="flex items-center space-x-2">
      <AiOutlineStar
        size={22}
        className={`pr-1 ${priority > 1 ? "text-yellow-500" : "text-gray-400"}`}
      />
      <AiOutlineStar
        size={22}
        className={`pr-1 ${priority > 2 ? "text-yellow-500" : "text-gray-400"}`}
      />
      <AiOutlineStar
        size={22}
        className={`pr-1 ${priority > 3 ? "text-yellow-500" : "text-gray-400"}`}
      />
      <AiOutlineStar
        size={22}
        className={`pr-1 ${priority > 4 ? "text-yellow-500" : "text-gray-400"}`}
      />
    </div>
  );
};

export default PriortryDisplay;
