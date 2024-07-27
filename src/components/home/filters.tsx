import React, { useState } from "react";

interface FiltersProps {
    onFilterChange: (filters: {
        categories: string[];
        colors: string[];
    }) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const category = e.target.name;
        setCategories((prev) => {
            const newCategories = e.target.checked
                ? [...prev, category]
                : prev.filter((cat) => cat !== category);
            onFilterChange({ categories: newCategories, colors });
            return newCategories;
        });
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const color = e.target.name;
        setColors((prev) => {
            const newColors = e.target.checked
                ? [...prev, color]
                : prev.filter((col) => col !== color);
            onFilterChange({ categories, colors: newColors });
            return newColors;
        });
    };

    return (
        <aside className="container-filters">
            <div className="d-flex align-items-center">
                <p className="fs-3">Filters</p>
                <p
                    style={{ textDecoration: "underline" }}
                    className="text-secondary cursor-pointer ms-4"
                    onClick={() => {
                        setCategories([]);
                        setColors([]);
                        onFilterChange({ categories: [], colors: [] });
                    }}
                >
                    Clear filters
                </p>
            </div>
            <div>
                <p className="fw-bold">Categories</p>
                {[
                    "jackets",
                    "fleece",
                    "sweatshirts",
                    "sweaters",
                    "shirts",
                    "t-shirts",
                    "pants&jeans",
                ].map((cat) => (
                    <div key={cat}>
                        <input
                            type="checkbox"
                            id={cat}
                            name={cat}
                            onChange={handleCategoryChange}
                        />
                        <label htmlFor={cat} className="ms-2">
                            {cat.charAt(0).toUpperCase() +
                                cat.slice(1).replace("&", " & ")}
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <p className="fw-bold">Color</p>
                <div className="grid-colors">
                    {[
                        "laranja",
                        "roxo",
                        "verde-escuro",
                        "azul",
                        "vermelho",
                        "azul-bebe",
                        "preto",
                        "rosa",
                        "branco",
                        "verde",
                    ].map((color) => (
                        <div key={color}>
                            <input
                                type="checkbox"
                                id={color}
                                name={color}
                                className="d-none"
                                onChange={handleColorChange}
                            />
                            <label
                                htmlFor={color}
                                className={`colors-buttons-props bg-color-${color} cursor-pointer ${
                                    colors.includes(color)
                                        ? "border border-3 border-primary"
                                        : ""
                                }`}
                            ></label>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};
