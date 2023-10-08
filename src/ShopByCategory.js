import "./ShopByCategory.css";

const categories = [
  {
    name: "Gold Coins",
    Image: "./assets/images/category/coin.jpg",
  },
  {
    name: "Earrings",
    Image: "./assets/images/category/earrings.jpg",
  },
  {
    name: "Pendant",
    Image: "./assets/images/category/Pendant.jpg",
  },
  {
    name: "Pin",
    Image: "./assets/images/category/pin.jpg",
  },
  {
    name: "Gold Coins",
    Image: "./assets/images/category/coin.jpg",
  },
  {
    name: "Earrings",
    Image: "./assets/images/category/earrings.jpg",
  },
  {
    name: "Pendant",
    Image: "./assets/images/category/Pendant.jpg",
  },
  {
    name: "Pin",
    Image: "./assets/images/category/pin.jpg",
  },
  {
    name: "Gold Coins",
    Image: "./assets/images/category/coin.jpg",
  },
  {
    name: "Earrings",
    Image: "./assets/images/category/earrings.jpg",
  },
  {
    name: "Pendant",
    Image: "./assets/images/category/Pendant.jpg",
  },
  {
    name: "pin",
    Image: "./assets/images/category/pin.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <div className="main">
      <h1>Shop By Category</h1>
      <p>Browse through your favorite categories. We'vs got them all!</p>
      <img src="./Line.svg" alt="br"></img>

      <div className="categories">
        {categories.map((category) => {
          return (
            <div className="category">
              <img src={category.Image} alt="a"></img>

              <div className="boderme">
                <p className="name">{category.name}</p>

                <div className="explore-slide">
                  <span className="move-left">Explore</span>
                  <span className="move-right"> &gt;</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
