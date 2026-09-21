import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../services/products"
import Header from "../components/Header";
import ProductList from "../components/ProductList";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [category, setCategory] = useState("Todos os produtos")

    useEffect(() => {

        const request = category === "Todos os produtos"
        ? getAllProducts()
        : getProductsByCategory(category)

        request
        .then(data => setProducts(data))
        .finally(() => setIsLoading(false))

    }, [category]);

    return (
        <>
        <Header/>
            <h1>Todos os produtos</h1>
            <div className="tabs">
                <button
                    className={`tab ${category === "Todos os produtos" ? "active" : ""}`}
                    onClick={() => setCategory("Todos os produtos")}
                >
                    Todos
                </button>
                <button
                    className={`tab ${category === "electronics" ? "active" : ""}`}
                    onClick={() => setCategory("electronics")}
                >
                    Eletronicos
                </button>
                <button
                    className={`tab ${category === "jewelery" ? "active" : ""}`}
                    onClick={() => setCategory("jewelery")}
                >
                    Joias
                </button>
            </div>
            {isLoading ? 
                <p>Carregando produtos...</p>
            :
           <ProductList titulo={category} produtos={products} />
            }
        </>
        

    )
}

export default ProductsPage