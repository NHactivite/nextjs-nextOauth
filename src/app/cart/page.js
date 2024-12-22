import { auth } from "@/auth";
import { Cart } from "@/components/cart";
import { redirect } from "next/navigation";


async function cartPage(){
    const getSession=await auth();
    
     if(!getSession?.user) {
        redirect("/unAuth-page") 
    }
    return(
       <Cart/>
    );
}

export default cartPage