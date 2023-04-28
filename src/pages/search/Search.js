import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'

// styles
import './Search.css'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recetas que incluyen "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Cargando...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}