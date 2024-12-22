 "use client"

import { loginAction, logoutAction } from "@/actions"
import { Button } from "../ui/button"

const { default: Link } = require("next/link")

export const Header=({getSession})=>{
   const handleAuthSignIn=async()=>{
        await loginAction()
   } 
   const handleAuthSignOut=async()=>{
        await logoutAction()
   } 
    return (
        <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
               <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                     <Link href={"/"} className="text-lg font-bold">Shopping Cart</Link>
               </div>
                  <ul className="flex gap-6 items-center justify-center mr-10">
                    <li  className=" font-semibold"><Link href={"/"}>Products</Link></li>
                    <li  className="font-semibold"><Link href={"/cart"}>Cart</Link></li>
                  </ul>
               <div className="flex space-x-3">
                   <form action={getSession?.user?handleAuthSignOut:handleAuthSignIn}>
                      <Button type="submit">{getSession?.user?"LogOut":"Login"}</Button>
                   </form>
               </div>
        </header>
    )
}