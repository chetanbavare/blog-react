import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Pagination() {

    const {pages, changeHandler, totalpages} = useContext(AppContext)

    return (
        <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
            <div className="w-11/12 flex justify-between max-w-[670px] py-2">
                <div className="flex gap-x-2">
                    {
                        pages > 1 && 
                        <button className="rounded-md border-2 px-4 py-1" onClick={() => changeHandler(pages-1)}>
                            Previous
                        </button>
                    }
                    
                    {
                        pages < totalpages && 
                        <button className="rounded-md border-2 px-4 py-1" onClick={() => changeHandler(pages+1)}>
                            Next
                        </button>
                    }    
                </div>
                
                <p className="pt-2 font-bold text-sm">Page {pages} of {totalpages}</p>
            </div>
        </div>
        
    )
}