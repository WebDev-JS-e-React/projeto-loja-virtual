const Categories = ({tipos}) => {
    tipos = ["Roupas", "Eletrônicos", "Calçados", "Acessórios"]
    return(
        <section className="categories">
            <h2>Categorias</h2>

            <div className="category-list">
                <div className="category-card">
                    <span className="category-icon">👕</span>
                    <p>{tipos[0]}</p>
                </div>

                <div className="category-card">
                    <span className="category-icon">📱</span>
                    <p>{tipos[1]}</p>
                </div>

                <div className="category-card">
                    <span className="category-icon">👟</span>
                    <p>{tipos[2]}</p>
                </div>

                <div className="category-card">
                    <span className="category-icon">🎒</span>
                    <p>{tipos[3]}</p>
                </div>
            </div>
        </section>
    )
}

export default Categories