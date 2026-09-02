import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>
        
            <ul className="nav">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contatos">Contatos</Link></li>
            </ul>
        
            <div className="header-actions">
                <span className="icon-button"><FaMagnifyingGlass /></span>
                <span className="icon-button"><FaHeart /></span>
                <span className="icon-button cart">
                    <FaShoppingCart />
                    <span className="badge">3</span>
                </span>
            </div>
        </header>
  )
}

export default Header