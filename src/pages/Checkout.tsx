import React from "react";
import Layout from "../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Lock, ShoppingBag, Trash } from "lucide-react";
import { useShop } from "../context/context";
import { useForm } from "react-hook-form";
import { creditCardSchema } from "../schemas/creditCardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const { cartProducts, setCartProducts } = useShop();

    const handleDeleteCart = (index: number) => {
        setCartProducts((prevCartProducts) => {
            const newCartProducts = [...prevCartProducts];
            newCartProducts.splice(index, 1);
            return newCartProducts;
        });
    };
    const calculateTotal = () => {
        return cartProducts.reduce((total, product) => {
            if (product.valor) {
                const price = parseFloat(product.valor.replace("$", ""));
                return total + (isNaN(price) ? 0 : price);
            }
            return total;
        }, 0);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof creditCardSchema>>({
        resolver: zodResolver(creditCardSchema),
    });

    const onSubmit = (data: z.infer<typeof creditCardSchema>) => {
        const orderData = {
            cartProducts,
            paymentInfo: data,
        };

        console.log("Order Data:", orderData);

        setCartProducts([]);
        reset();
        alert(
            "Thank you for your purchase! Your order has been placed successfully."
        );
        setTimeout(() => {
            navigate("/");
        }, 500);
    };
    return (
        <Layout>
            <div className="container mt-5">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <div className="fs-3 fw-bold">
                        <ShoppingBag size={48} />
                        Your Bag
                    </div>
                    <Link
                        to={"/"}
                        className="button-back d-flex justify-content-center"
                    >
                        <button className="button-back">Back</button>
                    </Link>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        {cartProducts.length === 0 && (
                            <div className="fs-5 fw-semibold">
                                Your bag is empty
                            </div>
                        )}
                        {cartProducts.length !== 0 && (
                            <div>
                                {cartProducts.map((product, index) => (
                                    <div
                                        key={`cart-${index}`}
                                        className="d-flex justify-content-between text-black mb-2"
                                    >
                                        <div className="d-flex">
                                            <div className="cart-img-conteiner">
                                                <img
                                                    src={product.foto}
                                                    alt={product.titulo}
                                                    className="product-item-img"
                                                />
                                            </div>
                                            <div className="ms-2">
                                                <div className="fs-5 fw-medium">
                                                    {product.titulo}
                                                </div>
                                                <div className="d-flex align-items-center mt-2">
                                                    <label
                                                        className="border border-black size-box fs-6"
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
                                        </div>
                                        <div>
                                            <div className="fs-5">
                                                {product.valor}
                                            </div>
                                            <Trash
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    handleDeleteCart(index)
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="fw-semibold mt-5">
                            <Lock /> Security & Privacy
                        </div>
                        <p>
                            Every transaction on <strong>Lifters Shop</strong>{" "}
                            is secure. Any personal information you give us will
                            be handled according to our{" "}
                            <span className="text-decoration-underline cursor-pointer fw-medium">
                                Privacy Policy
                            </span>
                            .
                        </p>
                    </div>
                    <div className="checkout-container p-3 ms-5 ">
                        <div className="d-flex justify-content-between text-white fs-4 border-bottom border-white pb-3">
                            <div>Total:</div>
                            <div>${calculateTotal().toFixed(2)}</div>
                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="credit-card-form"
                        >
                            <div className="">
                                <div
                                    className={`${
                                        errors.cardNumber
                                            ? "text-danger"
                                            : "text-white"
                                    }`}
                                >
                                    Card Number
                                </div>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    {...register("cardNumber")}
                                    className={`bg-input  w-100 text-white ${
                                        errors.cardNumber
                                            ? "border-error"
                                            : "border-0"
                                    }`}
                                />
                                {errors.cardNumber && (
                                    <div className="text-danger">
                                        {errors.cardNumber.message}
                                    </div>
                                )}
                            </div>

                            <div className="">
                                <div
                                    className={`${
                                        errors.cardName
                                            ? "text-danger"
                                            : "text-white"
                                    }`}
                                >
                                    Card Name
                                </div>
                                <input
                                    type="text"
                                    id="cardName"
                                    {...register("cardName")}
                                    className={`bg-input  w-100 text-white ${
                                        errors.cardName
                                            ? "border-error"
                                            : "border-0"
                                    }`}
                                />
                                {errors.cardName && (
                                    <div className="text-danger">
                                        {errors.cardName.message}
                                    </div>
                                )}
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="w-50">
                                    <div
                                        className={`${
                                            errors.expiryMonth
                                                ? "text-danger"
                                                : "text-white"
                                        }`}
                                    >
                                        Expiry Month
                                    </div>
                                    <select
                                        id="expiryMonth"
                                        {...register("expiryMonth")}
                                        className={`bg-input  w-100 text-white ${
                                            errors.expiryMonth
                                                ? "border-error"
                                                : "border-0"
                                        }`}
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option
                                                key={i}
                                                value={String(i + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.expiryMonth && (
                                        <div className="text-danger">
                                            {errors.expiryMonth.message}
                                        </div>
                                    )}
                                </div>

                                <div className="w-50 ms-2">
                                    <div
                                        className={`${
                                            errors.expiryYear
                                                ? "text-danger"
                                                : "text-white"
                                        }`}
                                    >
                                        Expiry Year
                                    </div>
                                    <select
                                        id="expiryYear"
                                        {...register("expiryYear")}
                                        className={`bg-input  w-100 text-white ${
                                            errors.expiryYear
                                                ? "border-error"
                                                : "border-0"
                                        }`}
                                    >
                                        {Array.from({ length: 11 }, (_, i) => (
                                            <option key={i} value={2024 + i}>
                                                {2024 + i}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.expiryYear && (
                                        <div className="text-danger">
                                            {errors.expiryYear.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="">
                                <div
                                    className={`${
                                        errors.cvv
                                            ? "text-danger"
                                            : "text-white"
                                    }`}
                                >
                                    CVV
                                </div>
                                <input
                                    type="text"
                                    id="cvv"
                                    {...register("cvv")}
                                    className={`bg-input  w-100 text-white ${
                                        errors.cvv ? "border-error" : "border-0"
                                    }`}
                                />
                                {errors.cvv && (
                                    <div className="text-danger">
                                        {errors.cvv.message}
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn  bg-white text-black w-100 mt-5"
                            >
                                Checkout
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
