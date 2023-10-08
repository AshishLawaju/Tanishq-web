import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPage from "./CarouselPage";
import ShopByCategory from "./ShopByCategory";
import Footer from "./footer";
import CustomerFavorites from "./CustomerFavorites";
function App() {
  return (
    <>
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
                  alt=""
                ></img>{" "}
                DIAMONDS
              </li>
              <li>
                <img
                  className="icon"
                  src="./assets/images/nav1/store.svg"
                  alt=""
                ></img>
                STORES
              </li>
              <li>
                <img
                  className="icon"
                  src="./assets/images/nav1/search.svg"
                  alt=""
                ></img>
                ACCOUNT
              </li>
              <li>
                <img
                  className="icon"
                  src="./assets/images/nav1/love.svg"
                  alt=""
                ></img>
                WISHLIST
              </li>
              <li className="cart">
                <img
                  className="icon"
                  src="./assets/images/nav1/cart.svg"
                  alt=""
                ></img>
                
                <p className="cardNoti">0</p>
                CART
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <nav className="nav2">
        <ul>
          <li className="navActive">
            <a href="#">All JEWELLERY</a>

            <div className="sub-menu-1">
              <ul>
                <li>
                  <a href="#">CATEGORY</a>
                </li>
                <li>
                  <a href="#">ALL JEWELLERY</a>
                </li>
                <li>
                  <a href="#">EARRINGS</a>
                </li>
                <li>
                  <a href="#">PENDANTS</a>
                </li>
                <li>
                  <a href="#">FINGER RINGS</a>
                </li>
                <li>
                  <a href="#">MANGALSUTRA</a>
                </li>
                <li>
                  <a href="#">CHAINS</a>
                </li>
                <li>
                  <a href="#">NECKLACES</a>
                </li>
                <li>
                  <a href="#">NECKLACE SET</a>
                </li>
                <li>
                  <a href="#">BANGLES </a>
                </li>
                <li>
                  <a href="#">BRACELETS</a>
                </li>
                <li>
                  <a href="#">PENDANTS & EARRING SET</a>
                </li>
                <li>
                  <a href="#">GOLD COINS</a>
                </li>
              </ul>
            
          

              <ul>
                <li><a href=""/>GENDER</li>
                <li><a href=""/>WOMEN'S JEWELLERY</li>
                <li><a href=""/>MEN</li>
                <li><a href=""/>KIDS & TEENS</li>
              </ul>
            </div>
          </li>

          <li>
            <a href="#">GOLD</a>
          </li>
          <li>DIAMOND</li>
          <li>EARRINGS</li>
          <li>RINGS</li>
          <li>MIA</li>
          <li>COLLECTIONS</li>
          <li>RIVAAH</li>
          <li>GIFTING</li>
          <li>GOLDEN HARVEST</li>
          <li>MORE</li>
        </ul>
      </nav>

      <CarouselPage/>
      <ShopByCategory/>
      <CustomerFavorites/>
      <Footer/>
    </>
  );
}

export default App;
