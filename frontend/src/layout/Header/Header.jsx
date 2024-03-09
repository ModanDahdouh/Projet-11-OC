import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../redux/reducers/authSlice";
import argentBankLogo from "../../img/argentBankLogo.webp";

export default function Header() {

    const location = useLocation();
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.token);
    const userName = useSelector((state) => state.user.userName);

    const handleLogOut = () => {
        dispatch(setLogOut());
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {location.pathname === '/user' && token ? (
                  <div>
                    <Link className="main-nav-item" to="/user"><i className="fa fa-user-circle"></i> {userName}</Link>
                    <Link className="main-nav-item" to="/" onClick={handleLogOut}><i className="fa fa-sign-out"></i> Sign Out</Link>     
                  </div>
                ) : (
                  <Link className="main-nav-item" to="/signin"><i className="fa fa-user-circle"></i> Sign In</Link>
                )}
            </nav>
        </header>
    );
}
