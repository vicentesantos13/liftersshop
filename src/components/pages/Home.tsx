import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { fetchProducts } from "../../services/fetchProducts";
import { Product } from "../../types/products";
import { Filters } from "../home/filters";

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                if (Array.isArray(data) && data.length > 0) {
                    setProducts(data);
                } else {
                    setError("No products found.");
                }
            } catch (err) {
                setError("Failed to fetch products.");
            }
        };

        fetchData();
    }, []);

    
    return (
        <Layout>
            <div className="hero-banner-custom">
                <div className="container">
                    <h2 className="text-white pt-5">Shop Men's</h2>
                    <p className="hero-phrase-custom mt-4 pb-5 text-white">
                        Revamp yor stryle with the latest designer trends in
                        men's clothing or achiev a perfectly curated wardrobe
                        thanks to our line-up of timeless pieces.
                    </p>
                </div>
            </div>
            <div className="container d-flex">
                <Filters/>
                <main className="w-100 ps-5 mb-5">
                    <div className="text-end mb-3">
                        Showing {products.length} products
                    </div>
                    {products.length !== 0 && (
                        <div className="product-list">
                            {products.map((product, index) => {
                                const capaFoto = product.fotos.find(
                                    (foto) => foto.capa
                                );
                                return (
                                    <div key={index} className="product-item">
                                        <a href={`/product/${index}`} className="link-custom">
                                        <div className="product-image">
                                            {capaFoto && (
                                                <img
                                                    src={capaFoto.url}
                                                    alt={product.titulo}
                                                    className="product-item-img"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <p className="mb-0 mt-1">{product.categoria}</p>
                                            <h3 className="fs-4">{product.titulo}</h3>
                                            <p className="mb-0">Preço: <strong>{product.valor}</strong></p>
                                            <div className="d-flex">
                                                Tamanhos:{" "}
                                                {product.tamanhos.map(
                                                    (tamanho, index) => (
                                                        <div className="ms-1">{tamanho}</div>
                                                    )
                                                )}
                                            </div>
                                            <div className="d-flex align-items-center">
                                                Cores:{" "}
                                                {product.cores.map(
                                                    (cor, index) => (
                                                        <div
                                                            className="colors-buttons-props ms-1"
                                                            style={{
                                                                backgroundColor: `${cor.codigo}`,
                                                            }}
                                                        ></div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </main>
            </div>
        </Layout>
    );
};

export default Home;
