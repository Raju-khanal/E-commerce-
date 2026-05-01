import Cardcontext from "./Cardcontext"
import { useState } from "react"
function CardProv({ children }) {
    const [cart, setCart] = useState([]);

    function addTocard(product) {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, qty: 1 }];
        });
    }
    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
    function QuantityDecrese(id) {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
            : item

        )
        );
    }
    function QuantityIncrese(id) {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
    }

    return (
        <Cardcontext.Provider value={{ cart, setCart, removeFromCart, QuantityDecrese, QuantityIncrese, addTocard }}>
            {children}
        </Cardcontext.Provider>
    )
}
export default CardProv;