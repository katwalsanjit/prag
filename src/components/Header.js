const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://img.freepik.com/free-vector/food-delivery-abstract-concept-vector-illustration-products-shipping-during-coronavirus-safe-shopping-self-isolation-services-online-order-stay-home-social-distancing-abstract-metaphor_335657-2931.jpg?size=626&ext=jpg"
          className="logo-img"
          alt="app-logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;