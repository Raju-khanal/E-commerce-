import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav style={styles.nav}>
            <h2 className="hidden md:flex text-blue-500 font-bold text-2xl">🛍️Raju's Store</h2>

            <ul style={styles.ul}>
                <li><Link style={styles.link} to="/">Home</Link></li>
                <li><Link style={styles.link} to="/about">About</Link></li>
                <li><Link style={styles.link} to="/product">Products</Link></li>
                <li><Link style={styles.link} to="/cart">Cart 🛒</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "linear-gradient(90deg, #141e30, #243b55)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },

    logo: {
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        letterSpacing: "1px",
    },

    ul: {
        display: "flex",
        listStyle: "none",
        gap: "25px",
        margin: 0,
        padding: 0,
    },

    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        fontWeight: "500",
        padding: "8px 12px",
        borderRadius: "8px",
        transition: "0.3s ease",
    },
};