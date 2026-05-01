import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section style={styles.section}>
            <div style={styles.overlay}></div>

            <div style={styles.content}>
                <h1 style={styles.title}>Welcome to Our Store 🛍️</h1>

                <p style={styles.text}>
                    Discover premium quality products at the best prices.
                    We provide everything you need in one place — fashion, electronics,
                    accessories, and daily essentials.
                </p>

                {/* PRODUCT HIGHLIGHTS */}
                <div style={styles.grid}>
                    <div style={styles.card}>👕 Fashion Wear</div>
                    <div style={styles.card}>📱 Electronics</div>
                    <div style={styles.card}>⌚ Accessories</div>
                    <div style={styles.card}>🏠 Home Essentials</div>
                </div>

                {/* FEATURE TEXT */}
                <div style={styles.infoBox}>
                    <h3>Why Shop With Us?</h3>
                    <ul style={styles.list}>
                        <li>⚡ Fast Delivery</li>
                        <li>🔒 Secure Payment</li>
                        <li>💰 Best Prices</li>
                        <li>📦 Quality Guaranteed Products</li>
                    </ul>
                </div>

                {/* CTA BUTTONS */}
                <div style={styles.buttons}>
                    <Link to="/product" style={styles.link}>
                        <button style={styles.buttonPrimary}>Shop Products 🚀</button>
                    </Link>

                    <Link to="/about" style={styles.link}>
                        <button style={styles.buttonSecondary}>About Us</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        position: "relative",
        padding: "40px",
        overflow: "hidden",
    },

    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        top: 0,
        left: 0,
    },

    content: {
        position: "relative",
        maxWidth: "800px",
        textAlign: "center",
        zIndex: 2,
    },

    title: {
        fontSize: "3rem",
        marginBottom: "15px",
        textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
    },

    text: {
        fontSize: "1.1rem",
        marginBottom: "25px",
        color: "#ddd",
        lineHeight: "1.6",
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "15px",
        marginBottom: "25px",
    },

    card: {
        background: "rgba(255,255,255,0.1)",
        padding: "15px",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        fontWeight: "bold",
    },

    infoBox: {
        background: "rgba(255,255,255,0.08)",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "25px",
        textAlign: "left",
    },

    list: {
        listStyle: "none",
        padding: 0,
        marginTop: "10px",
        lineHeight: "1.8",
    },

    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
    },

    link: {
        textDecoration: "none",
    },

    buttonPrimary: {
        padding: "12px 20px",
        border: "none",
        borderRadius: "30px",
        background: "linear-gradient(90deg, #ff8a00, #e52e71)",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    },

    buttonSecondary: {
        padding: "12px 20px",
        border: "2px solid white",
        borderRadius: "30px",
        background: "transparent",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
    },
};