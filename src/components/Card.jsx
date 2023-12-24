import { Link, NavLink } from "react-router-dom"


export default function Card({post}){

    return (
                    <div className="mb-[11px]">
                    <NavLink to={`/blog/${post.id}`}>
                        <p className="font-bold text-lg">{post.title}</p>
                    </NavLink>
                        
                        <p className="text-sm mt-[4px]">
                            By<span className="italic">{post.author} </span> On {" "} 
                            <Link to={`/categories/${post.category.replaceAll(" ","-")}`}>
                                <span className="underline font-bold">{post.category}</span>
                            </Link>
                             
                        </p>
                        <p className="text-sm text-[14px] mt-[4px]">Posted On <span>{post.date}</span></p>
                        <p className="text-md mt-[16px]">{post.content}</p>
                        <div className="flex mt-[8px]">
                        {
                            post.tags.map( (tag, index) => {
                                return (
                                    
                                        <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                                            <span className="text-blue-700 font-semibold text-xs mt-[5px] flex flex-row mr-2 underline justify-evenly" >#{tag} </span>
                                        </NavLink>
                                    
                                    
                                ) 
                            } )
                        }
                            
                        
                            
                        </div>
                        
                    </div>
                )
                
          
        
        
        
    
}