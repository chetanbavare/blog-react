import Head from "./components/Head"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react"
import {AppContext} from "./context/AppContext"
import "./App.css"

export default function App() {

  const {fetchPosts} = useContext(AppContext)
  
  useEffect( () => {
    fetchPosts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] )

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Head/>
      <Blogs/>
      <Pagination/>
    </div>
      
    
  )
}