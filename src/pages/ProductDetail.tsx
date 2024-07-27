import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/fetchProducts";
import { Product } from "../types/products";
import { ShoppingBag } from "lucide-react";
import { useShop } from "../context/context";
import { CartProduct } from "../types/cartProduct";
import { Link } from "react-router-dom";

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();
    const {setCartProducts} = useShop();

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const mainPhoto= product?.fotos.find((foto) => foto.capa)?.url ;

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const products = await fetchProducts();
                const selectedProduct = products[id];
                setProduct(selectedProduct);
            }
        };
        fetchData();
    }, [id]);

    const handleAddToCart = () => {
        if (!color || !size) {
            alert("Pick a color and a size!");
            return;
        }
        const newCartProduct: CartProduct = {
            titulo: product?.titulo,
            valor: product?.valor,
            descricao: product?.descricao,
            categoria: product?.categoria,
            cor: color,
            tamanho: size,
            foto: mainPhoto,
        };
    
        setCartProducts((prevCartProducts) => {
            return [...prevCartProducts, newCartProduct];
        });
    };

    
    

    return (
        <Layout>
            <div className="container mt-5 d-flex mb-5">
                <div className="product-detail-img-container">
                    {product?.fotos.map((foto, index) => (
                        <img
                            src={foto.url}
                            alt={`foto ${index}`}
                            className="product-item-img"
                        />
                    ))}
                </div>
                <div className="ms-5 position-relative">
                    <h2>{product?.titulo}</h2>
                    <div className="fs-5">{product?.valor}</div>
                    <p className="fs-5">{product?.descricao}</p>
                    <div className="mt-3">
                        <label className="fs-5 text-body-tertiary">
                            Color:
                        </label>
                        <div className="d-flex">
                            {product?.cores.map((cor, index) => (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`color-${cor.nome}`}
                                        name="color"
                                        value={cor.codigo}
                                        className="d-none"
                                        onChange={(e) =>
                                            setColor(e.target.value)
                                        }
                                        checked={color === cor.codigo}
                                    />
                                    <label
                                        htmlFor={`color-${cor.nome}`}
                                        className="colors-buttons-props cursor-pointer ms-1"
                                        style={{
                                            backgroundColor: `${cor.codigo}`,
                                            borderWidth:
                                                color === cor.codigo
                                                    ? "2px"
                                                    : "1px",
                                        }}
                                    ></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="fs-5 text-body-tertiary">Size:</label>
                        <div className="d-flex">
                            {product?.tamanhos.map((tamanho, index) => (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`size-${tamanho}`}
                                        name="size"
                                        value={tamanho}
                                        className="d-none"
                                        onChange={(e) =>
                                            setSize(e.target.value)
                                        }
                                        checked={size === tamanho}
                                    />
                                    <label
                                        htmlFor={`size-${tamanho}`}
                                        className="cursor-pointer ms-1 border border-black size-box"
                                        style={{
                                            backgroundColor:
                                                size === tamanho
                                                    ? "#000000"
                                                    : "#FFFFFF",
                                            color:
                                                size === tamanho
                                                    ? "#FFFFFF"
                                                    : " #000000",
                                        }}
                                    >
                                        {tamanho}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex bottom-0 position-absolute w-100 justify-content-between">
                        <button className="button-addtobag" onClick={handleAddToCart}>
                            <ShoppingBag className="me-3" />
                            Add to bag
                        </button>
                        <Link to={'/'}
                            className="button-back d-flex justify-content-center"
                        >
                            <button className="button-back">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
