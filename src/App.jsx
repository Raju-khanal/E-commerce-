import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Product from "./products/Product"
import CartBox from "./products/CartBox"
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/cart" element={<CartBox />} />
                <Route path="/product" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
export default App;