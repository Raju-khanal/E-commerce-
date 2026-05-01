import ProductDisplay from "./ProductDisplay"
function Product() {
    const Product = [
        { id: 1, name: "jacket", price: 2000, qty: 1 },
        { id: 2, name: "Shoes", price: 2000, qty: 1 },
        { id: 3, name: "Pant", price: 2000, qty: 1 },
        { id: 4, name: "Shirt", price: 2000, qty: 1 },
        { id: 5, name: "BLUes", price: 2000, qty: 1 },

    ]

    return (
        <>
            <ProductDisplay product={Product} />
        </>
    )
}
export default Product;