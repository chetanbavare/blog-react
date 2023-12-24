import { useLocation, useNavigate } from "react-router-dom"
import Head from "../components/Head"
import Pagination from "../components/Pagination"
import Blogs from "../components/Blogs"

const Category = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1).replaceAll("-","")
    
    return (
        <div>
            <Head/>
            <div className="mt-[100px] flex gap-x-2 items-center max-w-[670px] ml-[420px] -mb-20">
                {
                    <button className = "rounded-md border-2 px-4 py-1" onClick={() => navigate(-1)}>
                        Back
                    </button>
                }
                <p className="font-bold text-xl">Blogs On <span className="underline">{category}</span></p>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default Category