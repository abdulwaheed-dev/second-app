import {NavLink} from "react-router-dom";

function NavBar(){
    return(<>
        <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/about'>ABOUT</NavLink></li>
            <li><NavLink to='signup'>SIGNUP</NavLink></li>
            <li><NavLink to='categories'>CATEGORIES</NavLink></li>
        </ul>
    </>)
}
export default NavBar;