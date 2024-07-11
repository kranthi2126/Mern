import React , { useState } from "react"
import { Mycontext } from "../Mycontext";
import { useContext } from "react";
import '../index.css'
export default function Login(){
    return(
        <form className="max-w-md mx-auto bg-white shadow-md rounded
        px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold
        mb-2" htmlFor="username">
 Username
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none
focus:border-blue-500"
 id="username"
 type="text"
 placeholder="Enter your username"
 />
 </div>
 <div className="mb-6">
 <label className="block text-gray-700 text-sm font-bold
mb-2" htmlFor="password">
 Password
 </label>
 <input
 className="shadow appearance-none border rounded wfull py-2 px-3 text-gray-700 leading-tight focus:outline-none
focus:border-blue-500"
 id="password"
 type="password"
 placeholder="Enter your password"
 />
 </div>
 <div className="flex items-center justify-between">
 <button
 className="bg-blue-500 hover:bg-blue-600 text-white
font-bold py-2 px-4 rounded focus:outline-none focus:shadowoutline"
 type="button"
 >
 Sign In
 </button>
 </div>
 </form>
    )
        
    
}