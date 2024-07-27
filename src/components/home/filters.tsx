export const Filters = ()=>{
    return(
        <aside className="container-filters">
                    <div className="d-flex align-items-center ">
                        <p className="fs-3">Filters</p>
                        <p
                            style={{ textDecoration: "underline" }}
                            className="text-secondary cursor-pointer ms-4"
                        >
                            Clear filters
                        </p>
                    </div>
                    <div>
                        <p className="fw-bold">Categories</p>
                    </div>
                    <div>
                        <div>
                            <input
                                type="checkbox"
                                id="jackets"
                                name="jackets"
                            />
                            <label htmlFor="jackets" className="ms-2">
                                Jackets
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="fleece" name="fleece" />
                            <label htmlFor="fleece" className="ms-2">
                                Fleece
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="sweatshirts"
                                name="sweatshirts"
                            />
                            <label htmlFor="sweatshirts" className="ms-2">
                                Sweatshirts & Hoodies
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="sweaters"
                                name="sweaters"
                            />
                            <label htmlFor="sweaters" className="ms-2">
                                Sweaters
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" id="shirts" name="shirts" />
                            <label htmlFor="shirts" className="ms-2">
                                Shirts
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="t-shirts"
                                name="t-shirts"
                            />
                            <label htmlFor="t-shirts" className="ms-2">
                                T-shirts
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="pants&jeans"
                                name="pants&jeans"
                            />
                            <label htmlFor="pants&jeans" className="ms-2">
                                Pants & Jeans
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="fw-bold">Color</p>
                    </div>
                    <div className="grid-colors ">
                        <div>
                            <input
                                type="checkbox"
                                id="laranja"
                                name="laranja"
                                className="d-none"
                            />
                            <label
                                htmlFor="laranja"
                                className="colors-buttons-props bg-color-orange cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="roxo"
                                name="roxo"
                                className="d-none"
                            />
                            <label
                                htmlFor="roxo"
                                className="colors-buttons-props bg-color-purple cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="verde-escuro"
                                name="verde-escuro"
                                className="d-none"
                            />
                            <label
                                htmlFor="verde-escuro"
                                className="colors-buttons-props bg-color-dark-green cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="azul"
                                name="azul"
                                className="d-none"
                            />
                            <label
                                htmlFor="azul"
                                className="colors-buttons-props bg-color-blue cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="vermelho"
                                name="vermelho"
                                className="d-none"
                            />
                            <label
                                htmlFor="vermelho"
                                className="colors-buttons-props bg-color-red cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="azul-bebe"
                                name="azul-bebe"
                                className="d-none"
                            />
                            <label
                                htmlFor="azul-bebe"
                                className="colors-buttons-props bg-color-light-blue cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="preto"
                                name="preto"
                                className="d-none"
                            />
                            <label
                                htmlFor="preto"
                                className="colors-buttons-props bg-color-black cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="rosa"
                                name="rosa"
                                className="d-none"
                            />
                            <label
                                htmlFor="rosa"
                                className="colors-buttons-props bg-color-pink cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="branco"
                                name="branco"
                                className="d-none"
                            />
                            <label
                                htmlFor="branco"
                                className="colors-buttons-props bg-white cursor-pointer"
                            ></label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="verde"
                                name="verde"
                                className="d-none"
                            />
                            <label
                                htmlFor="verde"
                                className="colors-buttons-props bg-color-green cursor-pointer"
                            ></label>
                        </div>
                    </div>
                </aside>
    )
}