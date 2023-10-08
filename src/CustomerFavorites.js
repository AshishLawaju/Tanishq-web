import "./CustomerFavorites.css";

const cFavoritesData = [
  {
    title: "14 kt Dainty Diamond Ring",
    price: 32439,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/1.jpg",
  },
  {
    title: "Teardrop Cluster Diamond Ring",
    price: 104389,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/2.jpg",
  },
  {
    title: "14KT Yellow And White Gold Finger Ring",
    price: 21969,
    gender: "Male",
    type: "Leg Ring",
    picture: "./assets/images/CustomerFavorites/3.jpg",
  },
  {
    title: "Radiant Diamond Reflections Finger Ring",
    price: 15129,
    gender: "Child",
    type: "Ring",
    picture: "./assets/images/CustomerFavorites/4.jpg",
  },
  {
    title: "14 kt Dainty Diamond Ring",
    price: 32439,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/1.jpg",
  },
  {
    title: "Teardrop Cluster Diamond Ring",
    price: 104389,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/2.jpg",
  },
  {
    title: "14KT Yellow And White Gold Finger Ring",
    price: 21969,
    gender: "Male",
    type: "Leg Ring",
    picture: "./assets/images/CustomerFavorites/3.jpg",
  },
  {
    title: "Radiant Diamond Reflections Finger Ring",
    price: 15129,
    gender: "Child",
    type: "Ring",
    picture: "./assets/images/CustomerFavorites/4.jpg",
  },
  {
    title: "14 kt Dainty Diamond Ring",
    price: 32439,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/1.jpg",
  },
  {
    title: "Teardrop Cluster Diamond Ring",
    price: 104389,
    gender: "Women",
    type: "Finger Ring",
    picture: "./assets/images/CustomerFavorites/2.jpg",
  },
  {
    title: "14KT Yellow And White Gold Finger Ring",
    price: 21969,
    gender: "Male",
    type: "Leg Ring",
    picture: "./assets/images/CustomerFavorites/3.jpg",
  },
  {
    title: "Radiant Diamond Reflections Finger Ring",
    price: 15129,
    gender: "Child",
    type: "Ring",
    picture: "./assets/images/CustomerFavorites/4.jpg",
  },
];

function trans(){

}

export default function CustomerFavorites() {
  return (
    <>
      <div className="favoritesTitle">
        <h2>Customer Favorites</h2>

        <p>Find the jewellery which wil suit you the most.</p>
      </div>
      <img src="./Line.svg" alt="line"></img>

      <div className="parent-list">
        <button className="btn-fav left-btn">&lt;</button>
        <div className="cFavorites">
          {cFavoritesData.map((fav) => {
            return (
              <div className="favLine">
                <div className="cFavorite">
                  <img
                    className="favoriteIcon"
                    src="./assets/images/CustomerFavorites/love.png"
                    alt="img"
                  ></img>
                  <img src={fav.picture} alt="ring"></img>
                  <p>{fav.title}</p>
                  <p className="price">{"₹ " + fav.price}</p>
                  <p className="type">
                    <span>{fav.gender}</span> | <span>{fav.type}</span>
                  </p>
                </div>
                <p className="favoriteExplore">Explore Now</p>
              </div>
            );
          })}
        </div>
        <button className="btn-fav right-btn" onClick={trans() }>&gt;</button>
      </div>
    </>
  );
}
