// styles
import { useEffect, useRef, useState } from 'react'
import { useHistory } from "react-router-dom"
import './Create.css'
import { useFetch } from '../../hooks/useFetch'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const { postData, data } = useFetch('http://localhost:3000/recipes', "POST")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }

    setNewIngredient('')
    ingredientInput.current.focus()
  }

  // redirect user
  useEffect(() => {
    if (data) {
      history.push('/')
    }
  }, [data, history])

  return (
    <div className="create">
      <h2 className="page-title">Crear Nueva Receta</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Título de Receta</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Ingredientes</span>
          <div className='ingredients'>
            <input
            type="text"
            onChange = {(e) => setNewIngredient(e.target.value)}
            value={newIngredient}
            ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>+</button>
          </div>
        </label>
        <p>Ingredientes: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        <label>
          <span>Método</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Tiempo de preparación</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">CREAR</button>
      </form>
    </div>
  )
}
