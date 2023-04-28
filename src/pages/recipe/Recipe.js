import { useParams, useHistory } from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from "react"

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data: recipe, isPending, error } = useFetch(url)
  const history = useHistory()

  useEffect(() => {
      if (error) {
          //redirect
          setTimeout(() => {
              history.push('/')
          }, 2000)
      }
  }, [error, history])

  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error} - Redirecting...</div>}
      {recipe && (
          <>
           <h2 className="page-title">{recipe.title}</h2>
           <p>Toma {recipe.cookingTime} para cocinar</p>
           <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
           </ul>
           <p className="method">{recipe.method}</p>
          </>
      )}
    </div>
  )
}