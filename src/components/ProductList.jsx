import ProductCard from "./ProductCard"

function ProductList({titulo, produtos}) {
  return (
    <section id="produtos" className="products">
        <div>
            <h2>{titulo.charAt(0).toUpperCase() + titulo.slice(1)}</h2>
            <div className="product-list">
                {produtos.map((produto) => (
                <ProductCard key={produto.id} {...produto} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProductList
