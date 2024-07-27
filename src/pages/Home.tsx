import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { fetchProducts } from "../services/fetchProducts";
import { Product } from "../types/products";
import { Filters } from "../components/home/filters";
import { useShop } from "../context/context";

interface ProductWithIndex extends Product {
    originalIndex: number;
}

const Home: React.FC = () => {
    const { searchQuery } = useShop();
    const [products, setProducts] = useState<ProductWithIndex[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<
        ProductWithIndex[]
    >([]);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<{
        categories: string[];
        colors: string[];
    }>({ categories: [], colors: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                if (Array.isArray(data) && data.length > 0) {
                    const productsWithIndex = data.map((product, index) => ({
                        ...product,
                        originalIndex: index,
                    }));
                    setProducts(productsWithIndex);
                    setFilteredProducts(productsWithIndex);
                } else {
                    setError("No products found.");
                }
            } catch (err) {
                setError("Failed to fetch products.");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.titulo.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (filters.categories.length > 0) {
            filtered = filtered.filter((product) =>
                filters.categories.includes(product.categoria.toLowerCase())
            );
        }

        if (filters.colors.length > 0) {
            filtered = filtered.filter((product) =>
                product.cores.some((color) =>
                    filters.colors.includes(color.nome.toLowerCase())
                )
            );
        }

        setFilteredProducts(filtered);
    }, [searchQuery, filters, products]);

    const handleFilterChange = (newFilters: {
        categories: string[];
        colors: string[];
    }) => {
        setFilters(newFilters);
    };

    return (
        <Layout>
            <div className="hero-banner-custom">
                <div className="container">
                    <h2 className="text-white pt-5">Shop Men's</h2>
                    <p className="hero-phrase-custom mt-4 pb-5 text-white">
                        Revamp your style with the latest designer trends in
                        men's clothing or achieve a perfectly curated wardrobe
                        thanks to our line-up of timeless pieces.
                    </p>
                </div>
            </div>
            <div className="container d-flex">
                <Filters onFilterChange={handleFilterChange} />
                <main className="w-100 ps-5 mb-5">
                    <div className="text-end mb-3">
                        Showing {filteredProducts.length} products
                    </div>
                    {filteredProducts.length !== 0 ? (
                        <div className="product-list">
                            {filteredProducts.map((product, index) => {
                                const capaFoto = product.fotos.find(
                                    (foto) => foto.capa
                                );
                                return (
                                    <div key={index} className="product-item">
                                        <a
                                            href={`/product/${product.originalIndex}`}
                                            className="link-custom"
                                        >
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
                                                <p className="mb-0 mt-1">
                                                    {product.categoria}
                                                </p>
                                                <h3 className="fs-4">
                                                    {product.titulo}
                                                </h3>
                                                <p className="mb-0">
                                                    Preço:{" "}
                                                    <strong>
                                                        {product.valor}
                                                    </strong>
                                                </p>
                                                <div className="d-flex">
                                                    Tamanhos:{" "}
                                                    {product.tamanhos.map(
                                                        (tamanho, index) => (
                                                            <div
                                                                key={index}
                                                                className="ms-1"
                                                            >
                                                                {tamanho}
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    Cores:{" "}
                                                    {product.cores.map(
                                                        (cor, index) => (
                                                            <div
                                                                key={index}
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
                    ) : (
                        <div className="fs-5 fw-semibold text-center">
                            {error ? error : "No products match your search."}
                        </div>
                    )}
                </main>
            </div>
        </Layout>
    );
};

export default Home;
