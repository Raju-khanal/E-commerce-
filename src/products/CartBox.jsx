import { useContext } from "react";
import Cardcontext from "../context/Cardcontext";

function CartBox() {
    const { cart, QuantityDecrese, QuantityIncrese, removeFromCart } =
        useContext(Cardcontext);

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>🛒 Your Cart</h2>

            {cart.length === 0 ? (
                <p style={styles.empty}>Your cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <div>
                            <p style={styles.name}>
                                {item.name} - <span style={styles.price}>₹{item.price}</span>
                            </p>

                            <div style={styles.controls}>
                                <button
                                    style={styles.btn}
                                    onClick={() => QuantityIncrese(item.id)}
                                >
                                    +
                                </button>

                                <span style={styles.qty}>{item.qty}</span>

                                <button
                                    style={styles.btn}
                                    onClick={() => QuantityDecrese(item.id)}
                                >
                                    -
                                </button>

                                <button
                                    style={styles.removeBtn}
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}

            <div style={styles.totalBox}>
                <h3>Total: ₹{total}</h3>
            </div>

            <button style={styles.buyBtn}>BUY NOW</button>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        borderRadius: "15px",
        color: "white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    },

    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "28px",
    },

    empty: {
        textAlign: "center",
        color: "#ddd",
    },

    card: {
        background: "rgba(255,255,255,0.1)",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    },

    name: {
        fontSize: "18px",
        marginBottom: "10px",
    },

    price: {
        color: "#ffdd57",
        fontWeight: "bold",
    },

    controls: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
    },

    btn: {
        padding: "6px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        background: "#00c6ff",
        color: "white",
        fontWeight: "bold",
    },

    removeBtn: {
        padding: "6px 12px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        background: "#ff4d4d",
        color: "white",
        fontWeight: "bold",
    },

    qty: {
        minWidth: "25px",
        textAlign: "center",
        fontWeight: "bold",
    },

    totalBox: {
        marginTop: "20px",
        padding: "15px",
        background: "rgba(0,0,0,0.3)",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
    },

    buyBtn: {
        marginTop: "15px",
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        color: "white",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    },
};

export default CartBox;