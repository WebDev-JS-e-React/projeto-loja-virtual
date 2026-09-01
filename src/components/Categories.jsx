import { Link } from "react-router"

const Categories = () => {

    const listaCategorias = ["roupas", "eletronicos", "calçados"]

    return (
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <Link to={`categorias/${listaCategorias[0]}`}>
                    <div className="category-card">
                        <span className="category-icon">👕</span>
                        <p>Roupas</p>
                    </div>
                </Link>
                <Link to={`categorias/${listaCategorias[1]}`}>
                    <div className="category-card">
                        <span className="category-icon">📱</span>
                        <p>Eletrônicos</p>
                    </div>
                </Link>

                <Link to={`categorias/${listaCategorias[2]}`}>
                    <div className="category-card">
                        <span className="category-icon">👟</span>
                        <p>Calçados</p>
                    </div>
                </Link>

                <div className="category-card">
                    <span className="category-icon">🎒</span>
                    <p>Acessórios</p>
                </div>
            </div>
        </section>
    )
}

export default Categories