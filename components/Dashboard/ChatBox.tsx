"use client"
import React, { useState, useContext } from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Context, ContextValue } from '@/app/Context/Context'

const ChatBox = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context) as ContextValue;
    const [Chat, setChat] = useState(false);
    return (
        <div>
           {Chat ? <div>
                <Card className='bg-[#D2DAFF] text-[#1B262C] h-[30rem] w-96'>
                    <CardHeader className='bg-[#B1B2FF]' >
                        <CardTitle>Chat Bot</CardTitle>
                        <Image
                                        onClick={() => setChat(!Chat)}
                                        className=" absolute right-3 top-1 w-10 rounded-[50%]"
                                        src={"/close.svg"}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                    </CardHeader>
                    <CardContent className='bg-[#EEF1FF] border-2 rounded-lg h-[15rem] ml-7 mr-7 mt-2 ' >
                        {showResult ? (
                            <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll result ">
                                <div className="my-[40px] mx-0 flex items-center gap-5"> 
                                    <Image
                                        className="w-10 rounded-[50%]"
                                        src={"/user.svg"}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <p className="dark:text-white">{recentPrompt}</p>
                                </div>
                                <div className="flex items-start gap-5">
                                    <Image
                                        className={`${loading ? ' animate-pulse' : ''}`}
                                        src={"/bot.svg"}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                    {loading ? (
                                        <div className="w-[100%] flex flex-col gap-2.5">
                                            <hr className="rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite]" />
                                            <hr className="rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite]" />
                                            <hr className="rounded-[4px] border-none bg-[#f6f7f8] loaderHr bg-[length:800px_50px] h-5 animate-[loader_3s_linear_infinite]" />
                                        </div>
                                    ) : (
                                        <p className="dark:text-white text-[17px] font-[300px] leading-[1.8]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p className='flex justify-center'></p>
                        )}
                    </CardContent>
                    <CardFooter className='absolute bottom-3 w-[23rem]'>
                        <Input placeholder='Ask ChatBot ...' onChange={(e) => setInput(e.target.value)} value={input} />
                        <Image 
                            onClick={() => onSent(input)}
                            className="cursor-pointer w-[24px] ml-2"
                            src={"/send.svg"}
                            alt=""
                            width={30}
                            height={30}
                        />
                    </CardFooter>
                </Card>
            </div> : (
                <Image onClick={() => setChat(!Chat)} src="/chat.svg" alt="" width={30} height={24} />
            )}
        </div>
    )
}

export default ChatBox
