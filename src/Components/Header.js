import { LOGO_URL } from "../Utils/constants"; 
const Header=()=>{
    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
            <ul >
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Header ;