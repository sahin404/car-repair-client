import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useContext } from "react"
import { AuthContext } from "../../authProvider/AuthProvider"
import Swal from "sweetalert2"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const list = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>
    const handleLogout = () => {
        logout()
        .then(()=>{
            Swal("Succesfully Logout!");
        })
        .catch(()=>{
            Swal("An error occured!");
        })
    }
    return (
        <div className="navbar bg-base-100 mb-10 h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end text-lg font-semibold">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="space-x-5">
                    <button className="btn btn-outline text-[#FF3811]">Appointment</button>
                    {
                        user ? <button onClick={handleLogout} className="btn btn-outline text-[#FF3811]">Logout</button> : <Link className="btn btn-outline text-[#FF3811]" to="/login" >Login</Link>
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar