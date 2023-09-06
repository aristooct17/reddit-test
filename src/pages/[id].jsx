import { useRouter } from "next/router";
import data from "@/data/dbList.json";
import Link from "next/link";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineUpload, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';

const RedditDetail = ({ id }) => {
  const router = useRouter();

  return (
    <div className="container px-2 md:px-0 mx-auto py-16 min-h-screen">
        <div className="grid gap-8">
            <button
                className={`inline-flex w-fit items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 bg-white`}
                onClick={() => router.back()}
            >
                <AiOutlineArrowLeft />
            </button>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <div className="absolute w-[64px] h-[50px]">
                        <img 
                            className="w-[48px] h-[48px] bg-gray-800 object-cover rounded-full"
                            src={data[id].userImg}
                            alt="img"
                        />
                    </div>
                    <div className="flex-initial mt-[8px] ml-[4rem]">
                        <span className="break-words text-sm font-medium">r/Pyongyang</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-2xl">
                <div className="flex">
                    <div className="flex-none w-[64px] h-[50px]">
                        <img 
                            className="w-[48px] h-[48px] object-cover rounded-full"
                            src={data[id].userImg}
                            alt="img"
                        />
                    </div>
                    <div className="flex-initial mt-[8px]">
                        <span className="break-words text-sm font-medium">{data[id].username}</span>
                        <span className="break-words text-xs font-light ml-[12px] mr-[4px]">.</span>
                        <span className="break-words text-xs font-light ml-[12px]">{data[id].lastPost}</span>
                    </div>
                </div>
                <h3 className="break-words text-xl font-medium mt-[12px]">{data[id].title}</h3>
                <p className="break-words text-sm font-light mt-[8px] justify-self-stretch">
                    {data[id].content}
                </p>
                <Link href=''><p className="break-words text-sm mt-[8px]">{data[id].link}</p></Link>
                <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
                    <AiOutlineArrowUp
                        className="text-[18px] inline-block"
                    />
                    <span className="mx-[8px] mt-[8px]">{data[id].like}</span>
                    <AiOutlineArrowDown
                        className="text-[18px] inline-block"
                    />
                </div>
                <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
                    <BsChatLeft
                        className="text-[18px] inline-block"
                    />
                    <span className="ml-[8px] mt-[8px]">{data[id].commentCount}</span>
                </div>
                <div className="bg-slate-100 w-fit inline-block rounded-full break-words text-sm mt-[12px] mr-[12px] p-[8px]">
                    <AiOutlineUpload
                        className="text-[18px] inline-block"
                    />
                    <span className="ml-[8px] mt-[8px]">Share</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
    const { id } = context.query;
  
    return {
      props: { id }, // will be passed to the page component as props
    };
};

export default RedditDetail;
