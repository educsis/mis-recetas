// styles
import { Link } from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({ recipes }) {

  if(recipes.length === 0) {
    return <div className='error'>No se han encontrado recetas</div>
  }

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} de preparación.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cocinar</Link>
            </div>
        ))}
    </div>
  )
}
