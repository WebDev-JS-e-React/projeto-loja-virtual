function CategoryCard({name, emoji}) {
    return (
        <div className="category-card">
            <span className="category-icon">{emoji}</span>
            <p>{name}</p>
        </div>
    )
}

export default CategoryCard