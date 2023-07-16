import BlogList from "./BlogList";
import useFetch from "./useFetch";

// To run json server
// npx json-server --watch pathToJsonFile --port number

const Home = () => {

    // Makes a variable Reactive
    // const [name, setName] = useState("mario");
    // const [age, setAge] = useState(19)

    // const {data :(as) blogs}
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


    // the function gets object id to be deleted
    // const handleDelete = (id) =>{
    //     // blogs.filter will take array that's not to be deleted / don't match the id to be deleted
    //     const newBlogs = blogs.filter(blog => blog.id !== id)

    //     // setBlogs will be newBlogs objects
    //     setBlogs(newBlogs)
    // }

   

    return (
        <div className="home">
            {/* <p>{name} is {age}</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}

            {/* while sending props
            <ComponentName propertyName={value}/>

            propertyName is variable that'll be used 
            */}
            
            {error && <div> {error} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /*handleDelete={handleDelete}*/ />}

            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title=" Mario's blogs "/> */}

        </div>
    );
}

export default Home;