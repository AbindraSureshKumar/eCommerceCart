function CartItem({ cartItem, removeFromCart }) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{cartItem.title}</div>
        {cartItem.price}
      </div>
      <button
        class="badge bg-primary rounded-pill"
        onClick={() => {
          removeFromCart(cartItem);
        }}
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
