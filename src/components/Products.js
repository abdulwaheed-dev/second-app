import { NavLink, Outlet, useParams } from "react-router-dom";
function Products(){
    const params = useParams();
    return(<div>
        <h1>Products-{params.prodId}</h1>
        <ul>
            <li><NavLink to='pen'>PEN</NavLink></li>
            <li><NavLink to='books'>BOOKS</NavLink></li>
        </ul>
        <Outlet />
    </div>)
}
export default Products;