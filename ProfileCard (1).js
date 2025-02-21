
import React from "react"; 
import { FaDiscord, FaTwitter, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const ProfileCard = () => { 
  return ( 
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6"> 
      <div className="bg-gray-800 p-12 rounded-3xl shadow-2xl w-full max-w-md text-center border-4 border-yellow-500 transform hover:scale-105 transition duration-300 ease-in-out"> 
        <img src="/images/logo.png" alt="قلعة السنة" className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-yellow-500 shadow-lg" /> 
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg animate-pulse">السلام عليكم</h1> 
        <p className="text-lg mb-6 font-medium text-gray-300">مرحبًا بكم في <span className='text-yellow-400'>قلعة السنة</span></p> 
        <img src="/images/banner.jpg" alt="قلعة السنة" className="w-full h-48 object-cover rounded-xl mb-6 border-4 border-yellow-500 shadow-xl" /> 
        <p className="text-md italic text-gray-300 mb-8 border-t border-b border-gray-500 py-3">"وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَى بِاللَّهِ وَكِيلًا" (النساء: 81)</p> 
        <div className="flex justify-center space-x-6"> 
          <a href="https://discord.gg/3XjsUfruQZ" className="text-3xl p-4 border-4 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition flex items-center justify-center w-20 h-20 shadow-lg hover:shadow-yellow-500"> 
            <FaDiscord /> 
          </a> 
          <a href="https://twitter.com" className="text-3xl p-4 border-4 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition flex items-center justify-center w-20 h-20 shadow-lg hover:shadow-yellow-500"> 
            <FaTwitter /> 
          </a> 
          <a href="https://github.com" className="text-3xl p-4 border-4 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition flex items-center justify-center w-20 h-20 shadow-lg hover:shadow-yellow-500"> 
            <FaGithub /> 
          </a> 
          <a href="https://instagram.com" className="text-3xl p-4 border-4 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition flex items-center justify-center w-20 h-20 shadow-lg hover:shadow-yellow-500"> 
            <FaInstagram /> 
          </a> 
          <a href="https://youtube.com" className="text-3xl p-4 border-4 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition flex items-center justify-center w-20 h-20 shadow-lg hover:shadow-yellow-500"> 
            <FaYoutube /> 
          </a> 
        </div> 
      </div> 
    </div> 
  ); };

export default function Home() { 
  return ( 
    <div> 
      <ProfileCard /> 
    </div> 
  ); }
