import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext("")

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [pages,setPages] = useState(1)
    const [totalpages, setTotalpages] = useState(null)
    const [posts,setPosts] = useState([])
    const navigate = useNavigate()

    const fetchPosts = async(page = 1, tag=null , category) => {
        //THIS IS FOR GETTING DATA FROM JSON
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag) {
            url += `&tag=${tag}`
        }
        else if(category) {
            url += `&category=${category}`
        }
        try {
            const result = await fetch(url)
            const output = await result.json()
            if(!output.posts === output.posts.length === 0) {
                console.log("error while fetching")
            }
            console.log("api" , output)
            setPages(output.page)
            setPosts(output.posts)
            setTotalpages(output.totalPages)
        } catch(error) {
            console.log("error:",error)
            setPages(1)
            setPosts([])
            setTotalpages(null)
        } 
        setLoading(false)
    }

    function changeHandler(n) {
        navigate({search : `?page=${n}`}) 
        // this sets the query path to page that is being forced by changeHandler call 
        setPages(n)
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        pages,
        setPages,
        totalpages,
        setTotalpages,
        changeHandler,
        fetchPosts
    }

    return <AppContext.Provider value = {value}> {children} </AppContext.Provider>
       
}