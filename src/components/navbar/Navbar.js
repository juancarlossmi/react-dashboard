import "./Navbar.css";
import avatar from "../../assets/avatar.svg"


// define el componente de un Navbar reactivo

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href = "#">SubScribe</a>
                <a href = "#">Video</a>
                <a className="active_link" href = "#">Admin</a>
            </div>

            <div className="navbar__right">
                <a href = "#">
                    <i className="fa fa-search"></i>
                </a>
                <a href = "#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href = "#">
                    <img width="30" src={avatar} alt="avatar"></img>
                </a>
            </div>
        </nav>
    )
}
// exporta el componente para poder usarlo en app.js
export default Navbar;