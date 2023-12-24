import { useLocation, useNavigate } from "react-router-dom"
import Head from "../components/Head"
import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"
import { AppContext } from "../context/AppContext"
import Spinner from "../components/Spinner"
import { blogurl } from "../baseUrl"


const Blog = () => {

    const [blog, setBlog] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const {loading,setLoading} = useContext(AppContext)
    
    const [relatedBlogs, setrelatedBlogs] = useState([])
    

    const blogid = location.pathname.split("/").at(-1)

    const fetchRelatedBlogs = async() => {
        
        let url = `${blogurl}?blogId=${blogid}`
        console.log("url",url)
        setLoading(true)
        try {
            const res = await fetch(url)
            const output = await res.json()
            console.log("blog",output.blog,"relatedblogs",output.relatedBlogs)
            setBlog(output.blog)
            setrelatedBlogs(output.relatedBlogs)

        } catch(error) {
            console.log(error)
            setBlog(null)
            setrelatedBlogs([])
        }
       setLoading(false)
    }   

    useEffect( () => {
        if(blogid)  
        fetchRelatedBlogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location.pathname])

    return (
        <div>
            <Head/>
            <div className="w-11/12 flex flex-col gap-y-7 max-w-[670px] mt-[107px] mb-[90px] justify-center items-center border-black ml-[423px]">
            
                <div className="mt-[-6px]">
                    {
                        <button className = "rounded-md border-2 px-4 py-1 mr-[37em] ml-[-4px] border-gray-300" onClick={() => navigate(-1)}>
                            Back
                        </button>
                    }
                </div>

                {
                    loading ? 
                        (
                            <Spinner/>
                        ) :
                        (
                        blog ? (
                            <div>
                                <div className="-mb-4 mt-[-5px]">
                                    <Card post={blog}/>
                                </div>
                                
                                <div className="pt-[3px]">
                                    <h2 className="text-3xl font-bold mt-[53px] mb-[33px]">Related Blogs</h2>
                                    <div>
                                        {
                                            relatedBlogs.map( (post) => {
                                                return <Card key={post.id} post={post}/>
                                            })
                                        }
                                    </div>
                                    
                                </div>
                                
                            </div>
                        ) :  (
                                <div>No blogs found</div>
                        )
                        )                   
                }
            </div>
        </div>
    )
}

export default Blog