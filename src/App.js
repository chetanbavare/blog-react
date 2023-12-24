import Home from "./Pages/Home"
import Category from "./Pages/Category"
import Tag from "./Pages/Tag"
import Blog from "./Pages/Blog"
import { useContext, useEffect } from "react"
import {AppContext} from "./context/AppContext"
import "./App.css"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"

export default function App() {

  const {fetchPosts} = useContext(AppContext)
  
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
    //THIS IS PAGE PATHNAME FOR THE WEBSITE UI
  useEffect( () => {
    const page = searchParams.get("page") ?? 1
    if(location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchPosts(Number(page),tag)
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchPosts(Number(page),null,category)
    }
    else {
      fetchPosts(page)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location.pathname, location.search] ) //pathname is for tag, cateogry and search is for page

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tags/:tag" element={<Tag/>} />
      <Route path="/categories/:category" element={<Category/>}/>
      <Route path="/blog/:blogId" element={<Blog/>}/>
    </Routes>   
  )
}