import Link from "next/link";
import { BsViewStacked } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';

const Switcher = ({view, setView}) => {
  return (
    <>    
        <div className="bg-gray-300 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
            <button
                className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${
                view === "list" ? "active" : ""
                }`}
                onClick={() => setView("list")}
            >
                <span>Card</span>
            </button>
            <button
                className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 ${
                view === "grid" ? "active" : ""
                }`}
                onClick={() => setView("grid")}
            >
                <span>Classic</span>
            </button>
        </div>
    </>
  );
};

export default Switcher;
