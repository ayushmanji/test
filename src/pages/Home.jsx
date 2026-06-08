import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../features/cart/cartSlice";
import { fetchProducts } from "../features/products/productSlice";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products, loading, error } = useSelector(
        (state) => state.products
    );

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 10;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const isInCart = (id) => {
        return cartItems.some(
            (item) => item.id === id
        );
    };

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(
                (product) =>
                    product.category === selectedCategory
            );

    const indexOfLastProduct =
        currentPage * productsPerPage;

    const indexOfFirstProduct =
        indexOfLastProduct - productsPerPage;

    const currentProducts =
        filteredProducts.slice(
            indexOfFirstProduct,
            indexOfLastProduct
        );

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    if (loading) {
        return <h2>Loading Products...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Cart Items : {cartItems.length}</h2>

            <div style={{ marginBottom: "20px" }}>
                <button
                    onClick={() => navigate("/cart")}
                >
                    Go To Cart
                </button>

                <button
                    onClick={handleLogout}
                    style={{ marginLeft: "10px" }}
                >
                    Logout
                </button>
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label>
                    Select Category :
                </label>

                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(
                            e.target.value
                        );
                        setCurrentPage(1);
                    }}
                    style={{
                        marginLeft: "10px",
                    }}
                >
                    <option value="all">
                        All
                    </option>

                    {categories.map(
                        (category) => (
                            <option
                                key={
                                    category.slug
                                }
                                value={
                                    category.slug
                                }
                            >
                                {category.name}
                            </option>
                        )
                    )}
                </select>
            </div>

            <h1>Products</h1>

            {currentProducts.map(
                (product) => (
                    <div
                        key={product.id}
                        style={{
                            border:
                                "1px solid gray",
                            padding: "20px",
                            margin: "20px",
                        }}
                    >
                        <img
                            src={
                                product.thumbnail
                            }
                            alt={
                                product.title
                            }
                            width="180"
                            style={{
                                borderRadius:
                                    "10px",
                            }}
                        />

                        <h3>
                            {product.title}
                        </h3>

                        <p>
                            {
                                product.description
                            }
                        </p>

                        <h4>
                            $
                            {
                                product.price
                            }
                        </h4>

                        <button
                            disabled={isInCart(
                                product.id
                            )}
                            onClick={() =>
                                dispatch(
                                    addToCart(
                                        product
                                    )
                                )
                            }
                        >
                            {isInCart(
                                product.id
                            )
                                ? "Added"
                                : "Add To Cart"}
                        </button>
                    </div>
                )
            )}

            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent:
                        "center",
                    gap: "10px",
                }}
            >
                <button
                    disabled={
                        currentPage === 1
                    }
                    onClick={() =>
                        setCurrentPage(
                            currentPage - 1
                        )
                    }
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of{" "}
                    {totalPages}
                </span>

                <button
                    disabled={
                        currentPage ===
                        totalPages
                    }
                    onClick={() =>
                        setCurrentPage(
                            currentPage + 1
                        )
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;