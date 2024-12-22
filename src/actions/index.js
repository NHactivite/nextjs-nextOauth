"use server"

import { signIn, signOut } from "@/auth"

// get all products

export const fetchAllProduct=async()=>{
            try {

                const result=await fetch('https://dummyjson.com/products',{
                    method:"GET",
                    cache:"no-store"
                }).then(res => res.json())
              
                  if(result){
                    return{
                        success:"true",
                        data:result?.products
                    }
                  }else{
                    return{
                        success:"false",
                        message:"Something Wrong! please try again"
                    }
                  }
                
            } catch (error) {
                console.log(error);
                return{
                    success:"false",
                    message:"Something Wrong! please try again"
                }
                
            }
}  

export async function fetchProductDetails(productId){
    try {
        const result=await fetch(`https://dummyjson.com/products/${productId}`,{
            method:"GET",
            cache:"no-store"
        }).then(res => res.json())
          if(result){
            return{
                success:"true",
                data:result
            }
          }else{
            return{
                success:"false",
                message:"Something Wrong! please try again"
            }
          }
        
        
    } catch (error) {
        console.log(error);
                return{
                    success:"false",
                    message:"Something Wrong! please try again"
                }
    }
}

export async function loginAction(){
     await signIn("github")
}

export async function logoutAction(){
 await signOut("github")
}