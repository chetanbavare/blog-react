import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext("")

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [pages,setPages] = useState(1)
    const [totalpages, setTotalpages] = useState(null)
    const [posts,setPosts] = useState([])

    const fetchPosts = async(page = 1) => {
        setLoading(true)
        const url = `${baseUrl}?page=${page}`
        try {
            const result = await fetch(url)
            const output = await result.json()
            console.log(output)
            setPages(output.page)
            setPosts(output.posts)
            setTotalpages(output.totalPages)
        } catch(error) {
            console.log("error")
            setPages(1)
            setPosts([])
            setTotalpages(null)
        } 
        setLoading(false)
    }

    function changeHandler(n) {
        setPages(n)
        fetchPosts(n)
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