import { IoSearchSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { FaFacebook , FaYoutube , FaInstagram } from "react-icons/fa";
import { MdCopyright , MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowRight } from "react-icons/md";
import {IoIosPin} from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGOimg from './LOGo.png';

export function Delivery(){
    return(
        <div className="sm:ml-[20px] ml-[15px] code112 cursor-pointer items-center justify-center hidden xl:flex">
            <IoIosPin className="text-[20px] text-white" />
            <div className="ml-[10px]">
                <p className="text-[14px] font-medium text-gray-300">Delivering to Hyderabad 500001</p>
                <p className="font-bold text-[16px]">Update location</p>
            </div>
        </div>
    )
}

export function MainSearchBar(){
    return(
        <div className="items-center w-[700px] h-[38px] rounded-xl bg-white xl:ml-9 lg:ml-8 sm:ml-4 md:ml-6 hidden sm:flex">
            <div className="h-full bg-gray-200 hover:bg-gray-300 text-black hidden sm:flex sm:w-[50px] w-[35px] rounded-l-xl cursor-pointer items-center justify-center">All</div>
            <input type="text" className="flex-1 h-full pl-2 text-black min-w-[170px] rounded-l-xl" placeholder="Search..." />
            <div className="rounded-r-xl bg-orange-400 hover:bg-orange-500 h-full sm:w-[50px] w-[35px] code115"><IoSearchSharp className="text-[30px] text-black" /></div>
        </div>
    );
}

export function Language(){
  const [iconHover, setIconHover] = useState(false);
    return(
        <div className="h-[50px] sm:ml-[30px] ml-[15px] cursor-pointer items-center justify-center code112 text-white hidden md:flex" onMouseEnter={()=>setIconHover(true)} onMouseLeave={()=>setIconHover(false)}>
            <GrLanguage className="text-[20px] mr-[10px]" /><span className="text-orange-300 hover:text-orange-400">EN</span>{iconHover?(<MdOutlineKeyboardArrowRight className="text-[20px] fles items-center" />):(<MdOutlineKeyboardArrowDown className="text-[20px] fles items-center" />)}
        </div>
    )
}

export function SearchBar(){
    return(
    <div className="flex items-center w-full h-9 bg-slate-800 sm:hidden">
        <div className="flex items-center w-full h-9 rounded-xl bg-white sm:hidden">
            <div className="h-full bg-gray-200 hover:bg-gray-300 text-black hidden sm:flex sm:w-[50px] w-[35px] rounded-l-xl cursor-pointer items-center justify-center">All</div>
            <input type="text" className="flex-1 h-full pl-2 text-black min-w-[170px] rounded-l-xl" placeholder="Search..." />
            <div className="rounded-r-xl bg-orange-400 hover:bg-orange-500 h-full sm:w-[50px] w-[35px] code115"><IoSearchSharp className="text-[30px] text-black" /></div>
        </div>
    </div>
    );
}

export function Scrollitems(){
  const [iconHover, setIconHover] = useState(false);
    return(
        <div className="h-[35px] flex items-center bg-gray-700"> 
            <div className="flex items-center pl-[7px] pr-[10px] cursor-pointer hover:bg-gray-800 h-full"onClick={() => setIconHover(!iconHover)} >
                <span className="transition ease-in">
                    {iconHover ? ( <RxCross1 className="text-white size-6" />) : (<RxHamburgerMenu className="text-white size-6" />)}
                </span>
                <span className="ml-[5px]">All</span>
            </div>
            <div className="overflow-x-auto scrollbar-hide">
                <ul className="flex items-center h-full w-full gap-x-10 xl:ml-6">
                  <li>Sell</li>
                  <li>Best Sellers</li>
                  <li>Today's Deals</li>
                  <li>Mobiles</li>
                  <li>Customer Services</li>
                  <li>Fetch Pay</li>
                  <li>Electronics</li>
                  <li>Laptops</li>
                  <li>Home & Kitchen</li>
                  <li>Car & Moterbike</li>
                  <li>Fashion</li>
                  <li>New Releases</li>
                </ul>
            </div>
        </div>
    )
}

export function LOGO(){
    return(
        <img src={LOGOimg} alt="Logo" id="loggg" className="md:w-[170px] sm:w-[150px] w-[140px]  object-contain h-[45px] md:h-[55px] sm:h-[50px] code112 cursor-pointer flex items-center justify-center"/>
    )
}

export function BottomSignIn(){
    return(
        <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-4 border-t-2">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-gray-900 mb-2">
                     See personalized recommendations
                </h2>
                <div className="mb-2">
                     <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto hidden sm:block">
                        "The right product finds its perfect customer at the perfect time."<br />
                        "Your next favorite item is just one sign-in away."
                     </p>
                    <p className="text-sm text-gray-600 max-w-3xl mx-auto sm:hidden">
                        "Your next favorite item is just one sign-in away."
                    </p>
                </div>
                <NavLink to='/signin'>
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 py-1 rounded-2xl hover:shadow-md duration-150 w-48 sm:w-52">
                     Sign in
                    </button>
                </NavLink>
                    <p className="mt-4 text-sm text-gray-500">
                     New customer? 
                    <NavLink to="/login">
                      <span className="text-blue-800 hover:text-blue-900 cursor-pointer underline">Start here.</span>
                    </NavLink>
                    </p>
            </div>
       </div>
    );
}

export function BackToTop(){
    return(
        <a href="#Head">
            <div className="h-8 justify-center text-white sm:text-sm text-xs flex items-center cursor-pointer back">Back to top</div>
        </a>
    );
}

export function Footer(){
    return(
        <footer className="w-full lg:min-h-[70vh] bg-slate-600 pt-8">
      <div className="bg-slate-600 h-full w-full justify-center borderb lg:flex hidden">
        <div className="flex flex-col">
        <div className="flex text-white min-w-[900px] mb-10">
          <div className="flex flex-col">
            <p className="mb-2">ABOUT</p>
            <ul className="flex flex-col mr-[90px] gap-1">
              <li className="code1134">Contact Us</li>
              <li className="code1134">About Us</li>
              <li className="code1134">Careers</li>
              <li className="code1134">FetchKart Stories</li>
              <li className="code1134">Press</li>
              <li className="code1134">Corporate Information</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">HELP</p>
            <ul className="flex flex-col mr-[90px] gap-1">
              <li className="code1134">Payments</li>
              <li className="code1134">Shipping</li>
              <li className="code1134">Cancellation & Returns</li>
              <li className="code1134">FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">MAKE MONEY WITH US</p>
            <ul className="flex flex-col mr-[90px] gap-1">
              <li className="code1134">Sell on Fetchkart</li>
              <li className="code1134">Fetchkart Global Selling</li>
              <li className="code1134">Sell Around World</li>
              <li className="code1134">Supply to Fetchkart</li>
              <li className="code1134">Become an Affiliate</li>
              <li className="code1134">Fullfilment on Fetchkart</li>
              <li className="code1134">Advertise your Products</li>
              <li className="code1134">FetchPay on Merchants</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="mb-2">CONSUMER POLICY</p>
            <ul className="flex flex-col gap-1">
              <li className="code1134">Cancellation & Return</li>
              <li className="code1134">Terms of Use</li>
              <li className="code1134">Privacy</li>
              <li className="code1134">Sitemap</li>
              <li className="code1134"></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <ul className="flex gap-8">
            <li><FaFacebook className="hover:text-blue-500 text-[22px]" /></li>
            <li><BsTwitterX className="hover:text-black text-[22px]" /></li>
            <li><FaYoutube className="hover:text-red-600 text-[22px]" /></li>
            <li><FaInstagram className="hover:text-pink-500 text-[22px]" /></li>
          </ul>
        </div>
        </div>
      </div>
      <div className="bg-slate-600 flex-1 w-full flex justify-center items-center flex-col text-slate-200 py-4">
        <p><strong>Project:</strong> FetchKart – E-Commerce Platform</p>
        <p><strong>Developed By:</strong> Vinay Sai Pavan Banduchode,Sathish kumar Yarra</p>
        <p><strong>Tech Stack:</strong> React.js,Tailwind CSS</p>
        <p className="flex items-center"><MdCopyright /><strong>&nbsp;2025 Fetchkart.&nbsp;</strong> All rights Reserved.</p>
      </div>
    </footer>
    )
}