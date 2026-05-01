function About() {
    return (
        <section style={styles.section}>
            <div style={styles.overlay}></div>

            <div style={styles.container}>
                <h1 style={styles.title}>About Us</h1>

                <div style={styles.card}>
                    <p>
                        Welcome to our <b>E-commerce store</b>! We are dedicated to
                        providing high-quality products at affordable prices.
                    </p>
                </div>

                <div style={styles.card}>
                    <p>
                        Our mission is to make online shopping <b>easy, secure, and enjoyable</b> for everyone.
                        We offer fashion, electronics, accessories, and more.
                    </p>
                </div>

                <div style={styles.card}>
                    <p>
                        Customer satisfaction is our top priority, and we work hard
                        to deliver the best shopping experience.
                    </p>
                </div>

                <h3 style={styles.footer}>✨ Thank you for choosing us. Happy Shopping!</h3>
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
        background: "linear-gradient(135deg, #141e30, #243b55)",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
        color: "white",
    },

    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
        top: 0,
        left: 0,
    },

    container: {
        maxWidth: "800px",
        zIndex: 2,
        textAlign: "center",
    },

    title: {
        fontSize: "3rem",
        marginBottom: "25px",
        textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
    },

    card: {
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        fontSize: "16px",
        lineHeight: "1.6",
    },

    footer: {
        marginTop: "25px",
        fontSize: "18px",
        color: "#ffdd57",
    },
};

export default About;