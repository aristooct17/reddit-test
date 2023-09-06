import { useState, useEffect } from "react";
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Head from "next/head";
import data from "@/data/dbList.json";

export default function RedditList() {
  const title = "Reddit Index";
  const [view, setView] = useState("grid"); // default view is list
    return (
        <div className="container w-[640px] px-2 md:px-0 mx-auto py-16 min-h-screen">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="grid gap-8">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div className="absolute w-[64px] h-[50px]">
                            <img 
                                className="w-[48px] h-[48px] bg-gray-800 object-cover rounded-full"
                                src=''
                                alt="img"
                            />
                        </div>
                        <div className="flex-initial mt-[8px] ml-[4rem]">
                            <span className="break-words text-sm font-medium">r/Pyongyang</span>
                        </div>
                    </div>
                    <div className="col-span-1 text-right">
                        <span className="text-bold mt-[4px] mr-[12px]">Sort By:</span>
                        <Switcher view={view} setView={setView} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {data.map((redditList) =>(
                        <Card
                            key={redditList.id}
                            id={redditList.id}
                            image={redditList.userImg}
                            userName={redditList.username}
                            lastPost={redditList.lastPost}
                            contentPost={redditList.title}
                            content={`${ view ==="grid" ? '' : redditList.content}`}
                            link={redditList.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
