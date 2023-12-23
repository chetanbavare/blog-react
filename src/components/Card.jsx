import { useContext } from "react"
import {AppContext} from "../context/AppContext"

export default function Card(){

    const {posts} = useContext(AppContext)
    console.log(posts)
    
    return (
        
            posts.map( (post) => {
                return (
                    <div key={post.id} className="mb-[11px]">
                        <p className="font-bold text-lg">{post.title}</p>
                        <p className="text-sm mt-[4px]">
                            By <span className="italic">{post.author} </span>
                            on <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-sm text-[14px] mt-[4px]">Posted On <span>{post.date}</span></p>
                        <p className="text-md mt-[16px]">{post.content}</p>
                        <div className="flex gap-x-3 mt-[8px]">
                            {
                                post.tags.map( (tag, index) => {
                                    return <span className="font-bold text-blue-600 underline text-xs nt-[5px]" key={index}>#{tag}</span>
                                } )
                            }
                        </div>
                        
                    </div>
                )
                
            })
        
        
        
    )
}