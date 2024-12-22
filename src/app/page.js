import { fetchAllProduct } from "@/actions";
import { auth } from "@/auth";
import ProductCard from "@/components/ui/product-card";
import { redirect } from "next/navigation";

export default async function Home() {
  const getSession=await auth();
  if(!getSession?.user) {
    redirect("/unAuth-page"); 
    }

  
  const getAllProducts=await fetchAllProduct()
  return (
    <div className="">
        <div className="min-h[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto p-2">
        {
          getAllProducts && getAllProducts.data && getAllProducts.data.length >0?
            getAllProducts.data.map((productItem,idx)=>(
              <ProductCard item={productItem} key={idx}/>
            ))
          :null
         }
        </div>
    </div>
  );
}
