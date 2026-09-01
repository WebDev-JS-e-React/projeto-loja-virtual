import { useParams } from "react-router"

const CategoriesPage = () => {

    const {category} = useParams()

    return(
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
    )
}

export default CategoriesPage