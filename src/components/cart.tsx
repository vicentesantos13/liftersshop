import { Link } from "react-router-dom";
import { useShop } from "../context/context";
import { Trash } from "lucide-react";

export const Cart = () => {
    const { showCart, setShowCart, cartProducts, setCartProducts } = useShop();

    const handleDeleteCart = (index: number) => {
        setCartProducts((prevCartProducts) => {
            const newCartProducts = [...prevCartProducts];
            newCartProducts.splice(index, 1);
            return newCartProducts;
        });
    };
    if (cartProducts.length === 0) {
        setShowCart(false);
    }

    const calculateTotal = () => {
        return cartProducts.reduce((total, product) => {
            if (product.valor) {
                const price = parseFloat(product.valor.replace("$", ""));
                return total + (isNaN(price) ? 0 : price);
            }
            return total;
        }, 0);
    };

    return (
        <div>
            {showCart && (
                <div className="cart-container">
                    <div>
                        {cartProducts.map((product, index) => (
                            <div
                                key={`cart-${index}`}
                                className="d-flex justify-content-between text-white mb-2"
                            >
                                <div className="cart-img-conteiner">
                                    <img
                                        src={product.foto}
                                        alt={product.titulo}
                                        className="product-item-img"
                                    />
                                </div>
                                <div>
                                    <div className="fs-5">{product.titulo}</div>
                                    <div className="d-flex align-items-center mt-2">
                                        <label
                                            className="border border-white size-box fs-6"
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                            }}
                                        >
                                            {product.tamanho}
                                        </label>
                                        <label
                                            className="colors-buttons-props ms-1"
                                            style={{
                                                backgroundColor: `${product.cor}`,
                                            }}
                                        ></label>
                                    </div>
                                </div>
                                <div>
                                    <div className="fs-5">{product.valor}</div>
                                    <Trash
                                        className="cursor-pointer"
                                        onClick={() => handleDeleteCart(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-top">
                        <div className="d-flex justify-content-between fs-5 text-white">
                            <div>Total:</div>
                            <div>${calculateTotal().toFixed(2)}</div>
                        </div>
                        <Link to={"/checkout"} className="bg-white w-100 py-2 d-flex justify-content-center cursor-pointer text-decoration-none text-black" onClick={()=>setShowCart(false)}>
                            Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
