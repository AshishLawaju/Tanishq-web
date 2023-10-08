 function App() {
  return (
    <header>
      <nav className="nav1 ">
        <img src="./assets/images/nav1/logo.svg" alt="logo"></img>

        <div className="input1">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more.."
          />
          <div>
            <span>
              <img
                className="icon"
                src="./assets/images/nav1/camera.svg"
                alt="camera"
              />
            </span>
            <span>
              <img
                className="icon"
                src="./assets/images/nav1/mic.svg"
                alt="camera"
              />
            </span>
            <span>
              <img
                className="icon"
                src="./assets/images/nav1/search.svg"
                alt="camera"
              />
            </span>
          </div>
        </div>

        <div className="nav-list1">
          <ul className="nav-list1">
            <li>
              <img
                className="icon"
                src="./assets/images/nav1/diamond.svg"
              alt=""></img>{" "}
              DIAMONDS
            </li>
            <li>
              <img className="icon" src="./assets/images/nav1/store.svg" alt=""></img>
              STORES
            </li>
            <li>
              <img className="icon" src="./assets/images/nav1/search.svg" alt=""></img>
              ACCOUNT
            </li>
            <li>
              <img className="icon" src="./assets/images/nav1/love.svg" alt=""></img>
              WISHLIST
            </li>
            <li>
              <img className="icon" src="./assets/images/nav1/cart.svg" alt=""></img>
              CART
            </li>
          </ul>
        </div>
      </nav>
      <nav></nav>
    </header>
  );
}
