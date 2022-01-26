import { NavLink, Outlet } from "react-router-dom";

function Categories(){
    return (<>
        <h1 className="text-center">These are Categories..</h1>
        <ul>
        <li><NavLink to='cat1'>CAT1</NavLink></li>
            <li><NavLink to='cat2'>CAT2</NavLink></li>
        </ul>
        <Outlet />
    </>)

}
export default Categories;