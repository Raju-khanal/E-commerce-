import Cardcontext from "../context/Cardcontext";
import { useContext, useState } from "react";

function ProductDisplay({ product }) {
    const { addTocard } = useContext(Cardcontext);

    const [hovered, setHovered] = useState(null);
    const [toast, setToast] = useState("");

    function handleAdd(item) {
        addTocard(item);
        setToast(`${item.name} added to cart 🛒`);

        setTimeout(() => {
            setToast("");
        }, 2000);
    }

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div style={styles.toast}>
                    {toast}
                </div>
            )}

            <div style={styles.container}>
                {product.map((item) => {
                    const isHovered = hovered === item.id;

                    return (
                        <div
                            key={item.id}
                            style={{
                                ...styles.card,
                                transform: isHovered
                                    ? "translateY(-10px) scale(1.03)"
                                    : "translateY(0)",
                                boxShadow: isHovered
                                    ? "0 15px 30px rgba(0,0,0,0.5)"
                                    : "0 8px 20px rgba(0,0,0,0.3)",
                            }}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <h2 style={styles.name}>{item.name}</h2>

                            <p style={styles.price}>₹{item.price}</p>

                            <button
                                style={styles.button}
                                onMouseDown={(e) =>
                                    (e.target.style.transform = "scale(0.92)")
                                }
                                onMouseUp={(e) =>
                                    (e.target.style.transform = "scale(1)")
                                }
                                onClick={() => handleAdd(item)}
                            >
                                Add To Cart 🛒
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
    },

    card: {
        width: "220px",
        padding: "20px",
        borderRadius: "15px",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        color: "white",
        transition: "0.3s ease",
        cursor: "pointer",
    },

    name: {
        fontSize: "18px",
        marginBottom: "10px",
    },

    price: {
        fontSize: "16px",
        color: "#ffdd57",
        fontWeight: "bold",
        marginBottom: "15px",
    },

    button: {
        padding: "10px 15px",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        fontWeight: "bold",
        color: "white",
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        transition: "0.2s ease",
    },

    toast: {

        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#00c853",
        color: "white",
        padding: "12px 18px",
        borderRadius: "8px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        zIndex: 1000,
        fontWeight: "bold",
    },
};

export default ProductDisplay;