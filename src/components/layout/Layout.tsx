import React from "react";
import Header from "./Header";
import { Cart } from "../cart";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Cart />
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
