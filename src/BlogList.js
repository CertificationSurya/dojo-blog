import {Link} from 'react-router-dom'
// 1. Typical way
// const BlogList = (props) => {
    // let blogs = props.blogs;
    
// props (can be any name) is the object which holds the name 'blogs'(propertyName in home).
// to take the actual value passed, we do, props.arguementSentName.

// 2. Destructure object and attain value
const BlogList = ({ blogs,title }) =>{
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>

            {blogs.map((blog)=> (
                // the key is to track the list items
                <div className="blog-preview" key={blog.id}>
                    
                    <Link to ={`/blogs/${blog.id}`}>
                    <h2> {blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                    </Link>
                    {/* why ()=> [anonymns function]? 
                    -> To pass another/main event function with arguement. And not auto calling function*/}

                    
                </div>
            ))}
        </div>

     );
}
 
export default BlogList;