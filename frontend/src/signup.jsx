import { LOGO } from "./Minorcomponents"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:5000/signup",{
                username : username,
                email : email,
                password : password,
            })
            console.log("Response from backend:",response.data);
            alert(response.data.message);
            if(response.status==201){
                localStorage.setItem("authToken", "dummyToken");
                navigate("/");
            }
        }catch(err){
            console.log("Error:",err);
            alert("Account creation failed");
        }
    }
    return(
        <>
        <section className="h-[70vh] w-full flex flex-col items-center bg-gray-100 border-b-2">
            <div className="my-4">
                <LOGO />
            </div>
            <form className="bg-white md:px-8 sm:px-6 px-4 py-8 rounded-lg shadow-md max-w-[400px] w-full mx-6 border" onSubmit={handleSubmit}>
                <h1 className="lg:text-[24px] md:text-[22px] text-[20px] mb-4">Sign up or create account</h1>
                <p className="font-semibold mb-2 text-[16px]">Enter user name</p>
                <input onChange={(e)=>setUsername(e.target.value)} type="name" placeholder="name" className="w-full px-2 py-1 mb-4 border-black border-[1px] rounded"  required/>
                <p className="font-semibold mb-2 text-[16px]">Enter email Id</p>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" autoComplete="email" placeholder="Email" className="w-full px-2 py-1 mb-4 border-black border-[1px] rounded" required />
                <p className="font-semibold mb-2 text-[16px]">Enter password</p>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full px-2 py-1 mb-4 border-black border-[1px] rounded" placeholder="password" required />
                <button className="w-full bg-gradient-to-r from-amber-400 to-orange-400 text-white py-1 rounded-3xl mb-2" type="submit">Continue</button>
                <p className="text-[12px] mb-4">By continuing, you agree to FetchKart's <span className="text-blue-500 cursor-pointer underline">Conditions of Use</span> and <span className="text-blue-500 cursor-pointer underline">Privacy Notice</span>.</p>
                <div className="h-[1px] w-full bg-slate-400 mb-2"></div>
                <p className="font-semibold mb-2 text-[16px]">Buying for Work?</p>
                <p className="text-blue-500 cursor-pointer text-[14px]">Create a free Buisiness accout</p>
            </form>
        </section> 
        </>
    )
}