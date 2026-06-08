import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h1>Checkout Page</h1>

            <h2>Total Items: {cartItems.length}</h2>

            <h2>Total Price: ${total.toFixed(2)}</h2>

            {cartItems.map((item) => (
                <div
                    key={item.id}
                    style={{
                        border: "1px solid gray",
                        margin: "10px",
                        padding: "10px",
                    }}
                >
                    <h3>{item.title}</h3>

                    <p>${item.price}</p>

                    <button
                        onClick={() =>
                            dispatch(removeFromCart(item.id))
                        }
                    >
                        Remove
          </button>
                </div>
            ))}
        </div>
    );
}

export default Cart;