import {useParams, useHistory} from "react-router-dom"
import useFetch from "./useFetch";
const BlogDetails = () => {
    // a hook to take in the router parameter (useParam)
    const {id} = useParams();
    const history = useHistory();

    // useFetch Hook
    const {data: blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
    
    const handleClick = () =>{
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "delete"
        })
        .then(()=>{
            history.push("/")
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <div className="blocks">
                    <h2> {blog.title} </h2>
                    <button onClick={handleClick}>delete</button>

                    </div>
                    <p> Written By {blog.author} </p>
                    <div>{ blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;