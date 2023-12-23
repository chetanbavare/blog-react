import { useContext } from "react"
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner"
import Card from "./Card"

export default function Blogs() {

    const {posts,loading} = useContext(AppContext)

    return (
        <div className="w-11/12 flex flex-col gap-y-7 max-w-[670px] mt-[100px] mb-[90px] justify-center items-center">
            {
                loading ? 
                    <Spinner/> : (
                        posts.length === 0 ? 
                            <div><p>Not found</p></div> :
                            <Card/>
                        )
            }
        </div>
    )

}