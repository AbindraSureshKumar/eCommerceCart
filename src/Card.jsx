import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card({ item, cartItems, handleAddToCart }) {
    let star = (n) => {
      let strRow =[];
      for(var i=0;i<n;i++) {
        strRow.push(<FontAwesomeIcon icon={faStar} />);
      }
      return strRow;
    };
  return (
    <div className="col-lg-4 mb-2">
      <div class="card" style={{ width: "14rem" }}>
        <img
          src={item.img}
          class="card-img-top"
          alt="..."
          style={{ height: "8rem" }}
        />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          {star(item.rating)}
          <p class="card-text">{item.price}</p>
          <button
            disabled={cartItems.some((obj) => obj.id === item.id)}
            onClick={() => {
              handleAddToCart(item);
            }}
            class="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
