// importing react router link
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}

                {/* we gonna use routing for create */}
                <Link to="/">Home</Link>

                {/* inline css.  style{{}} = first {} is insuating dynamic value and second {} is js object */}
                {/* in css, background-color, in jsx '-' seems more like minus, so we use backgroundColor */}
                  {/* style={{ 
                  color: "white",
                  backgroundColor : "#f1356d",
                  borderRadius: '8px'
                }*/ }

                <Link to="/create">New Blog</Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;