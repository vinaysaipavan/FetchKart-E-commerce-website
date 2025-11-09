import { LOGO } from "./Minorcomponents"
import {MdCopyright} from "react-icons/md";
import { useState } from "react";

export function Signup(){
    const [email,setEmail] = useState("");
    return(
        <>
        <section className="h-[70vh] w-full flex flex-col items-center bg-gray-100 border-b-2">
            <div className="my-4">
                <LOGO />
            </div>
            <div className="bg-white md:px-8 sm:px-6 px-4 py-8 rounded-lg shadow-md max-w-[400px] w-full mx-6 border">
                <h1 className="lg:text-[24px] md:text-[22px] text-[20px] mb-4">Sign up or create account</h1>
                <p className="font-semibold mb-2 text-[16px]">Enter email Id</p>
                <input type="text" className="w-full px-2 py-1 mb-4 border-black border-[1px] rounded" />
                <button className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white py-1 rounded-3xl mb-2" type="submit">Continue</button>
                <p className="text-[12px] mb-4">By continuing, you agree to FetchKart's <span className="text-blue-500 cursor-pointer underline">Conditions of Use</span> and <span className="text-blue-500 cursor-pointer underline">Privacy Notice</span>.</p>
                <div className="h-[1px] w-full bg-slate-400 mb-2"></div>
                <p className="font-semibold mb-2 text-[16px]">Buying for Work?</p>
                <p className="text-blue-500 cursor-pointer text-[14px]">Create a free Buisiness accout</p>
            </div>
        </section>
        <div className=" flex flex-col items-center py-2">
            <ul className="flex gap-8 my-2">
                <lis className="code155">Conditions of Use</lis>
                <lis className="code155">Privacy Notice </lis>
                <lis className="code155">Privacy Notice </lis>
            </ul>
            <p className="flex items-center whitespace-nowrap text-[13px]"><MdCopyright />&nbsp;&nbsp;2025 , Fetchkart.com , Inc. or its affiliates</p>
        </div>
        </>
    )
}