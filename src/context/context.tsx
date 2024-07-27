import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { CartProduct } from "../types/cartProduct";

type ShopProviderProps = {
    children: ReactNode;
};
type ShopContextProps = {
    showCart: boolean;
    setShowCart: (value: boolean) => void;
    cartProducts: CartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
};
const ShopContext = createContext<ShopContextProps>({} as ShopContextProps);

export function ShopProvider({ children }: ShopProviderProps) {
    const [showCart, setShowCart] = useState(false);
    const [cartProducts, setCartProducts] = useState<CartProduct[]>(() => {
        const storedCart = localStorage.getItem("cartProducts");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <ShopContext.Provider
            value={{
                showCart,
                setShowCart,
                cartProducts,
                setCartProducts,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}

export function useShop() {
    const context = useContext(ShopContext);

    return context;
}
