import { Skeleton } from "@/components/ui/skeleton";


export default function Loading(){
       return(
        <div className="w-full h-screen flex justify-center items-center">
            <Skeleton className="w-[200px] h-[200px] rounded-full" />
        </div>

       )
}