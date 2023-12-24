import { useLocation, useNavigate } from "react-router-dom"
import Head from "../components/Head"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"

const Tag = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
    console.log(tag)

    return (
        <div>
            <Head/>
            <div className="mt-[100px] flex gap-x-2 items-center max-w-[670px] ml-[420px] -mb-20">
                {
                    <button className = "rounded-md border-2 px-4 py-1" onClick={() => navigate(-1)}>
                        Back
                    </button>
                }
                <p className="font-bold text-xl">Blogs Tagged <span className="underline text-blue-700">#{tag.replaceAll("-"," ")}</span></p>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default Tag