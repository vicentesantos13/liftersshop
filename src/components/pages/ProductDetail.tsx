import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/fetchProducts";
import { Product } from "../../types/products";
import { ShoppingBag } from "lucide-react";

const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const products = await fetchProducts();
                const selectedProduct = products[id];
                setProduct(selectedProduct);
            }
        };
        fetchData();
    }, []);
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
                                <div
                                    className="colors-buttons-props ms-1"
                                    style={{
                                        backgroundColor: `${cor.codigo}`,
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="fs-5 text-body-tertiary">Size:</label>
                        <div className="d-flex">
                            {product?.tamanhos.map((tamanho, index) => (
                                <div className="border border-black ms-1 size-box">
                                    {tamanho}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex bottom-0 position-absolute w-100 justify-content-between">
                        <button className="button-addtobag">
                            <ShoppingBag className="me-3"/>
                            Add to bag
                        </button>
                        <a href="/" className="button-back d-flex justify-content-center">
                        <button className="button-back">Back</button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
