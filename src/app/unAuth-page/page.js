import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function UnauthPage(){
    const getSession=await auth();
      if(getSession?.user) {
         redirect("/"); 
         }
     
    return(
        <div className="w-full flex flex-col items-center mt-32"> 
               <h2 className="text-6xl font-extrabold text-[#383838]">Your are not logged in. Please login</h2>
        </div>
    )
}