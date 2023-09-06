import Link from "next/link";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineUpload } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';

const Card = ({ id, image, contentPost, content, link, userName, lastPost }) => {
  return (
    <Link href={`/${id}`}>
      <div className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-2xl">
        <div className="flex">
            <div className="flex-none w-[64px] h-[50px]">
                <img 
                    className="w-[48px] h-[48px] object-cover rounded-full"
                    src={image}
                    alt="img"
                />
            </div>
            <div className="flex-initial mt-[8px]">
                <span className="break-words text-sm font-medium">{userName}</span>
                <span className="break-words text-xs font-light ml-[12px] mr-[4px]">.</span>
                <span className="break-words text-xs font-light ml-[12px]">{lastPost}</span>
            </div>
        </div>
        <h3 className="break-words text-xl font-medium mt-[12px]">{contentPost}</h3>
        <p className="break-words text-sm font-light mt-[8px] justify-self-stretch">
            {content}
        </p>
        <Link href=''><p className="break-words text-sm mt-[8px]">{link}</p></Link>
        <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
            <AiOutlineArrowUp
                className="text-[18px] inline-block"
            />
            <span className="mx-[8px] mt-[8px]">417</span>
            <AiOutlineArrowDown
                className="text-[18px] inline-block"
            />
        </div>
        <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
            <BsChatLeft
                className="text-[18px] inline-block"
            />
            <span className="ml-[8px] mt-[8px]">120</span>
        </div>
        <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
            <AiOutlineUpload
                className="text-[18px] inline-block"
            />
            <span className="ml-[8px] mt-[8px]">Share</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
