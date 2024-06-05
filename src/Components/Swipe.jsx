import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Swipe() {

   const [val, setVal] = useState(false)
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
       <div className='relative w-80 h-36 bg-zinc-500 rounded-md flex overflow-hidden'>
           <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           
           <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 bg-[#dadada7b] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <FaArrowRight size={".7em"}/>
           </span>
       </div>
    </div>
  )
}

export default Swipe
