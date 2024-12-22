import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import { AddToCartButton } from "@/components/ui/add-to-cart-button";
import { redirect } from "next/navigation";

export default async function ProductDetails({params}){
          const productId= params.details;
          const getProductDetails=await fetchProductDetails(productId)
          const getSession=await auth();
               if(!getSession?.user) redirect("/unAuth-page") 
         return(
            <div className="max-w-7xl mx-auto p-6">
                 <div className="p-6">
                        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-5 ">
                             <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                                   <img src={getProductDetails?.data.thumbnail} alt={getProductDetails.data.title} className="w-full rounded object-contain h-40"/>
                                   <hr className="border-black border-2 my-6"/>
                                   <div className="flex flex-wrap gap-5 justify-center mx-auto">
                                        {
                                            getProductDetails?.data.images
                                            .map((item,idx)=>(
                                                       <img key={idx} src={item} alt={item} className="w-24 cursor-pointer"/>
                                            ))
                                        }
                                   </div> 
                             </div>
                             <div className="lg:col-span-2 p-5">
                                 <h2 className="text-3xl font-bold text-gray-900">{getProductDetails.data.title}</h2>
                                 <p className="mt-5 text-green-800 text-xl">{getProductDetails.data.price}</p>
                                 <h3 className="mt-3 text-lg font-bold text-gray-700">{getProductDetails.data.description}</h3>
                                 <AddToCartButton productItem={getProductDetails?.data}/>
                             </div>
                        </div>
                 </div>
            </div>
         )
}