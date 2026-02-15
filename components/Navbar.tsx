"use client"


import { Session } from "next-auth";
import { login, logout } from "@/lib/auth-actions";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ session } : { session : Session | null}) {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
            <Link href="/" className="flex items-center">
              <Image src="/gbs.jpg" alt="" width={50} height={50} />
              <span className="text-2xl font-bold text-gray-800">
                Travel Planner
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {session ? (
               <>
                 <Link href="/trips" className="text-slate-900 hover:text-sky-500">
                   My Trips
                 </Link>

                 <Link href="/globe" className="text-slate-900 hover:text-sky-500">
                   Globe
                 </Link>

                 <button 
                   onClick={logout}  
                   className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm"
                 >
                 Sign Out
               </button>
               
               </>
              ) : (
                <button 
                  onClick={login}  
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-sm"
               >
                 Sign In
                 <svg 
                   className="w-6 h-6 ml-2"
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   fill="currentColor"
                 >
                   <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.38-3.87-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56 4.56-1.53 7.85-5.85 7.85-10.95C23.5 5.74 18.27.5 12 .5z"/>
                 </svg>
               </button>
              )}
            </div>
        </div>
    </nav>
  )
}
