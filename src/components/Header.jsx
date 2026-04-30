// Header.jsx - Navigation menu and shopping cart icon display

import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      {/* Brand Logo / Name */}
      <div className="header__logo">
        <Link to="/">🛒 ShoppyGlobe</Link>
      </div>

      {/* Navigation Menu */}
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Home
        </Link>
        <Link to="/cart" className="header__nav-link">
          Cart
          {/* Cart item count badge */}
          {cartCount > 0 && (
            <span className="header__cart-badge">{cartCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
